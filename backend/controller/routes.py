from flask import Flask,request
import requests
import pymysql

app = Flask(__name__)
github_api_url = 'https://api.github.com'

@app.route('/github/repository/contributors', methods=['GET'])
def get_contributors():
    data = request.get_json()
    owner = data['data']
    repo = data['repo']
    url = github_api_url + '/repos' + '/' + owner + '/' + repo + '/issues'
    headers = {'Authorization': 'Bearer ' + data['access_token']}

    return 'Success'