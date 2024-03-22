import requests
from .. import config

github_api_url = 'https://api.github.com'
AUTH = config.Config.AUTH

def getorg_id(org):
    url = github_api_url + '/orgs' + '/' + org
    headers = {'Authorization': 'Bearer ' + AUTH}
    response = requests.get(url, headers=headers)
    response_json = response.json()

    id = response_json['id']
    return id
def get_commites(repo, owner):
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/commits'
    headers = {'Authorization': 'Bearer ' + AUTH}
    response = requests.get(url, headers=headers)
    length = len(response.json())
    return length

def get_commiters(repo, owner):
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/contributors'
    headers = {'Authorization': 'Bearer ' + AUTH}
    response = requests.get(url, headers=headers)
    length = len(response.json())
    return length

def get_user_pulls(repo, owner):
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/pulls'
    headers = {'Authorization': 'Bearer ' + AUTH}
    response = requests.get(url, headers=headers)
    pulls = response.json()
    user_pull_request_counts = {}
    for pull in pulls:
        user = pull["user"]["login"]

        if user in user_pull_request_counts:
            user_pull_request_counts[user] += 1
        else:
            user_pull_request_counts[user] = 1
    return user_pull_request_counts
def get_user_issues(repo, owner):
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/issues'
    headers = {'Authorization': 'Bearer ' + AUTH}
    response = requests.get(url, headers=headers)
    issues  = response.json()
    user_issues_count  = {}
    for issue in issues :
        user = issue["user"]["login"]

        if user in user_issues_count:
            user_issues_count[user] += 1
        else:
            user_issues_count[user] = 1

    return user_issues_count

def get_pulls(repo, owner):
    url1 = github_api_url + '/repos' + '/' + owner + '/' + repo + '/pulls?state=' + 'open'
    url2 = github_api_url + '/repos' + '/' + owner + '/' + repo + '/pulls?state=' + 'close'
    url3 = github_api_url + '/repos' + '/' + owner + '/' + repo + '/pulls?state=' + 'all'
    headers = {'Authorization': 'Bearer ' + AUTH}
    response1 = requests.get(url1, headers=headers)
    response2 = requests.get(url2, headers=headers)
    response3 = requests.get(url3, headers=headers)
    open_pulls = len(response1.json())
    close_pulls = len(response2.json())
    all_pulls = len(response3.json())
    return open_pulls, close_pulls, all_pulls

def get_team(repo, owner):
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/teams'
    headers = {'Authorization': 'Bearer ' + AUTH}
    response = requests.get(url, headers=headers)
    teams = response.json()
    return teams[0]["name"]

def get_issues(repo, owner):
    url2 = github_api_url + '/repos' + '/' + owner + '/' + repo + '/issues?state=' + 'close'
    url3 = github_api_url + '/repos' + '/' + owner + '/' + repo + '/issues?state=' + 'all'
    headers = {'Authorization': 'Bearer ' + AUTH}
    response2 = requests.get(url2, headers=headers)
    response3 = requests.get(url3, headers=headers)
    close_issues = len(response2.json())
    all_issues = len(response3.json())
    return all_issues, close_issues