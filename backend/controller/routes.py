from flask import Blueprint,request,jsonify
import requests
from ..model import repoModel
from backend import db
import datetime

github_api_url = 'https://api.github.com'

repobp = Blueprint('repo', import_name=__name__)

# get the id,created_at,description,fork_count,open_issues_count,updated_at of repository
@repobp.route('/github/repository', methods=['POST'])
def get_repository():
    try:
        owner = request.form.get('data')
        repo = request.form.get('repo')
        auth = request.form.get('access_token')
        url = github_api_url + '/repos' + '/' + owner + '/' + repo
        headers = {'Authorization': 'Bearer ' + auth}
        response = requests.get(url, headers=headers)

        response_json = response.json()
        value = response_json['key']

        repository = repoModel.Repo(repo_id=value, name=repo, create_user=owner, create_time=datetime.datetime.now())
        # insert into the db
        db.session.add(repository)
        db.session.commit()
        return jsonify(code=20000, flag=True, message="Success")
    except Exception as e:
        print(e)
        return jsonify(code=20001, flag=False, message="Fail")

# login name, contributions times of contributors
@repobp.route('/github/repository/contributors', methods=['GET'])
def get_contributors():
    data = request.get_json()
    owner = data['data']
    repo = data['repo']
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/contributors'
    headers = {'Authorization': 'Bearer ' + data['access_token']}
    response = requests.get(url, headers=headers)

    return 'Success'

# response.length pulls times of a repository
@repobp.route('/github/repository/pulls', methods=['GET'])
def get_pulls():
    data = request.get_json()
    owner = data['data']
    repo = data['repo']
    state = data['state']
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/pulls?' + 'state=' + state
    headers = {'Authorization': 'Bearer ' + data['access_token']}
    response = requests.get(url, headers=headers)

    return 'Success'

# response.length issues number of a repository
@repobp.route('/github/repository/issues', methods=['GET'])
def get_issues():
    data = request.get_json()
    owner = data['data']
    repo = data['repo']
    state = data['state']
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/issues?' + 'state=' + state
    headers = {'Authorization': 'Bearer ' + data['access_token']}
    response = requests.get(url, headers=headers)

    return 'Success'