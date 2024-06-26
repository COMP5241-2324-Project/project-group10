from flask import Blueprint, jsonify, request
from backend import cache
from gemini.gemini import generate_other, generate_std_score, generate_group_score
from backend import r
from .rating import get_information_from_redis

genaibp = Blueprint('genai', import_name=__name__)


@genaibp.route('/genai_group', methods=['POST'])
def generate_group_info():
    try:
        data = request.get_json()
        data = data['data']
        repo_name = data['repo_name']
        repo_fork = data['repo_fork']
        repo_starts = data['repo_starts']
        repo_watch = data['repo_watch']
        repo_issues = data['repo_issues']
        repo_pull = data['repo_pull']
        repo_commites = data['repo_commites']
        cur_time = data['cur_time']
        users = data['users']
        result = generate_group_score(repo_name,repo_starts,repo_fork,repo_commites,repo_issues,repo_watch,repo_pull,users)
        # cache.set('group_score', result, timeout=60*60*24*7)
        # Return the result
        return jsonify(code=200, flag=True, message="Group score generated successfully", data={"rows": result})
    except Exception as e:
        data = request.get_json()
        print(e)
        return jsonify(code=500, flag=False, message="Failed to generate group score")

@genaibp.route('/genai_student', methods=['POST'])
def generate_std_info():
    try:
        data = request.get_json()
        data = data['data']
        user_id = data['user_id']
        user_name = data['user_name']
        user_contribution = data['user_contributions']
        user_commit = data['user_commits']
        user_issue = data['user_issuses_raised']
        user_pull = data['user_pull_request']
        result = generate_std_score(user_id,user_name, user_contribution, user_commit, user_issue, user_pull)
        # cache.set('student_score', result, timeout=60*60*24*7)
        # Return the result
        return jsonify(code=200, flag=True, message="Student score generated successfully", data={"rows": result})
    except Exception as e:
        print(e)
        return jsonify(code=500, flag=False, message="Failed to generate student score")

@genaibp.route('/genai_other', methods=['POST'])
def generate_other_info():
    try:
        data = request.get_json()
        data = data['data']
        text = data['text']
        method = data['method']
        if method == 'student':
            user_id = data['user_id']
            user_id = str(user_id)
            student_report = get_information_from_redis('user:'+user_id)
            # student_report = cache.get('student_score')
            result = generate_other(text,student_report)
        else:
            repo_name = data['repo_name']
            # group_report = r.get('repo:'+repo_name)
            group_report = get_information_from_redis('repo:'+repo_name)
            # group_report = cache.get('group_score')
            result = generate_other(text,group_report)
        # Return the result
        return jsonify(code=200, flag=True, message="successfully", data={"rows": result})
    except Exception as e:
        print(e)
        return jsonify(code=500, flag=False, message="Failed to generate")