from flask import Blueprint, request, jsonify
import requests
from ..model import repoModel, stuModel, orgModel, actModel
from backend import db
from datetime import datetime
from .. import config
from . import untils

github_api_url = 'https://api.github.com'

# repobp = Blueprint('repo', import_name=__name__)
gitbp = Blueprint('git', import_name=__name__)
AUTH = config.Config.AUTH


def formatted_time(time):
    create_time = datetime.strptime(time, '%Y-%m-%dT%H:%M:%SZ')
    formatted_create_time = create_time.strftime('%Y-%m-%d %H:%M:%S')

    return formatted_create_time


def get_repo(org, org_id):
    url = github_api_url + '/orgs' + '/' + org + '/repos'
    headers = {'Authorization': 'Bearer ' + AUTH}
    response = requests.get(url, headers=headers)
    repos_data = response.json()
    repos = []

    fork_count = 0
    issues_count = 0
    watcher_count = 0
    commits_count = 0
    commiter_count = 0
    pulls_count = 0
    pulls_open_count = 0
    pulls_close_count = 0
    stars_count = 0
    for repo_data in repos_data:
        org_id = org_id
        repo_id = repo_data["id"]
        repo_name = repo_data["name"]
        repo_create_time = formatted_time(repo_data["created_at"])
        repo_watch = repo_data["watchers_count"]
        repo_stars = repo_data["stargazers_count"]
        repo_forks = repo_data["forks_count"]
        owner = repo_data["owner"]["login"]
        repo_issues, repo_issues_close = untils.get_issues(repo_name, owner)
        repo_pull, repo_pull_open, repo_pull_close = untils.get_pulls(repo_name, owner)
        repo_commiter = untils.get_commiters(repo_name, owner)
        repo_commites = untils.get_commites(repo_name, owner)
        repo_issues_open = repo_data["open_issues_count"]
        repo_size = repo_data["size"]
        update_time = datetime.now()

        data_tuple = (repo_name, owner)
        repos.append(data_tuple)
        fork_count = fork_count + repo_forks
        issues_count = repo_issues + issues_count
        watcher_count = repo_watch + watcher_count
        commits_count = repo_commites + commits_count
        commiter_count = repo_commiter + commiter_count
        pulls_count = repo_pull + pulls_count
        pulls_open_count = repo_pull_open + pulls_open_count
        pulls_close_count = repo_pull_close + pulls_close_count
        stars_count = repo_stars + stars_count
        repository = repoModel.Repo(org_id=org_id, repo_id=repo_id, repo_name=repo_name,
                                    repo_create_time=repo_create_time,
                                    repo_watch=repo_watch, repo_stars=repo_stars, repo_forks=repo_forks,
                                    repo_issues=repo_issues,
                                    repo_issues_open=repo_issues_open, repo_size=repo_size,
                                    repo_issues_close=repo_issues_close,
                                    repo_pull=repo_pull, repo_pull_open=repo_pull_open, repo_pull_close=repo_pull_close,
                                    repo_commiter=repo_commiter, repo_commites=repo_commites, update_time=update_time)
        db.session.add(repository)
    db.session.commit()

    org_data = {
        "fork_count": fork_count,
        "issues_count": issues_count,
        "watcher_count": watcher_count,
        "commits_count": commits_count,
        "commiter_count": commiter_count,
        "pulls_count": pulls_count,
        "pulls_open_count": pulls_open_count,
        "pulls_close_count": pulls_close_count,
        "stars_count": stars_count
    }

    return repos, org_data


def insert_activites(repo, owner):
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/events'
    headers = {'Authorization': 'Bearer ' + AUTH}
    response = requests.get(url, headers=headers)
    activites_data = response.json()
    for activity in activites_data:
        activities_id = activity["id"]
        user_id = activity["actor"]["id"]
        type = activity["type"]
        activities_date = formatted_time(activity["created_at"])
        if type == "PushEvent":
            payload = activity["payload"]
            activities_message = ', '.join([commit["message"] for commit in payload["commits"]])
            activities_url = ', '.join([commit["url"] for commit in payload["commits"]])
        else:
            activities_message = ""
            activities_url = ""
        update_time = datetime.now()

        act = actModel.Act(user_id=user_id, activities_id=activities_id, activities_date=activities_date,
                           activities_message=activities_message, activities_url=activities_url, repo_name=repo,
                           update_time=update_time, type=type)
        db.session.add(act)
    db.session.commit()


def insert_repo_commiters(repo, owner):
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/contributors'
    headers = {'Authorization': 'Bearer ' + AUTH}
    response = requests.get(url, headers=headers)
    user_data = response.json()
    user_team_name = untils.get_team(repo, owner)
    user_pull_request_counts = untils.get_user_pulls(repo, owner)
    user_issues_count = untils.get_user_issues(repo, owner)
    for user in user_data:
        user_id = user["id"]
        user_name = user["login"]
        user_contributions = user["contributions"]
        user_pull_requests = user_pull_request_counts.get(user_name, 0)
        user_issuses_raised = user_issues_count.get(user_name, 0)
        update_time = datetime.now()
        student = stuModel.Stu(user_id=user_id, repo=repo, user_name=user_name, user_team_name=user_team_name,
                               user_contributions=user_contributions, user_issuses_raised=user_issuses_raised,
                               user_pull_requests=user_pull_requests, update_time=update_time)
        db.session.add(student)
    db.session.commit()
    return len(user_data)


def get_org(org, org_data, repo_count):
    url = github_api_url + '/orgs' + '/' + org
    headers = {'Authorization': 'Bearer ' + AUTH}
    response = requests.get(url, headers=headers)
    response_json = response.json()

    org_id = response_json['id']
    org_fork = org_data["fork_count"]
    org_issues = org_data["issues_count"]
    teacher_name = "bot"
    org_watch = org_data["watcher_count"]
    org_commits = org_data["commits_count"]
    org_commiter_num = org_data["commiter_count"]
    org_pull = org_data["pulls_count"]
    org_pull_open = org_data["pulls_open_count"]
    org_pull_close = org_data["pulls_close_count"]
    org_starts = org_data["stars_count"]
    update_time = datetime.now()

    organization = orgModel.Org(org_id=org_id, org_name=org, repo_count=repo_count, org_fork=org_fork,
                                org_issues=org_issues, org_watch=org_watch, org_commits=org_commits,
                                teacher_name=teacher_name,
                                org_commiter_num=org_commiter_num, org_pull=org_pull, org_pull_open=org_pull_open,
                                org_pull_close=org_pull_close, org_starts=org_starts, update_time=update_time)
    # insert into the db
    db.session.add(organization)
    db.session.commit()


# get the id,created_at,description,fork_count,open_issues_count,updated_at of repository
@gitbp.route('/refresh', methods=['POST'])
def get_info():
    try:
        org = request.form.get('org')
        get_act = request.form.get('act')
        id = untils.getorg_id(org)
        repos, org_data = get_repo(org, id)
        for repo in repos:
            repo_name = repo[0]
            owner = repo[1]
            insert_repo_commiters(repo_name, owner)
            if get_act == '1':
                insert_activites(repo_name, owner)
        get_org(org, org_data, len(repos))
        return jsonify(code=20000, flag=True, message="Success")
    except Exception as e:
        print(e)
        return jsonify(code=20001, flag=False, message="Fail")


@gitbp.route('/activity', methods=['POST'])
def get_activites():
    try:
        repo = request.form.get('repo')
        owner = request.form.get('owner')
        insert_activites(repo, owner)
        return jsonify(code=20000, flag=True, message="Success")
    except Exception as e:
        print(e)
        return jsonify(code=20001, flag=False, message="Fail")
