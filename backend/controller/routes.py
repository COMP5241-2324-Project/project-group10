from flask import Flask,request
import requests
import pymysql

app = Flask(__name__)
github_api_url = 'https://api.github.com'

@app.route('/github/repository', methods=['GET'])
def get_contributors():
    data = request.get_json()
    owner = data['data']
    repo = data['repo']
    url = github_api_url + '/repos' + '/' + owner + '/' + repo
    headers = {'Authorization': 'Bearer ' + data['access_token']}

    return 'Success'

@app.route('/github/repository/contributors', methods=['GET'])
def get_contributors():
    data = request.get_json()
    owner = data['data']
    repo = data['repo']
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/contributors'
    headers = {'Authorization': 'Bearer ' + data['access_token']}

    return 'Success'

@app.route('/github/repository/pulls', methods=['GET'])
def get_contributors():
    data = request.get_json()
    owner = data['data']
    repo = data['repo']
    state = data['state']
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/pulls?' + 'state=' + state
    headers = {'Authorization': 'Bearer ' + data['access_token']}

    return 'Success'

@app.route('/github/repository/issues', methods=['GET'])
def get_contributors():
    data = request.get_json()
    owner = data['data']
    repo = data['repo']
    state = data['state']
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/issues?' + 'state=' + state
    headers = {'Authorization': 'Bearer ' + data['access_token']}

    return 'Success'