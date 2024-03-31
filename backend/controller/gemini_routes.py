from flask import Blueprint, jsonify, request
from gemini.gemini_test import generate_std_score, generate_group_score, generate_other

genaibp = Blueprint('genai', import_name=__name__)


@genaibp.route('/genai_group/<repo_id>', methods=['POST'])
def generate_group_info(repo_id):
    try:
        data = request.get_json()
        repo_id = data['repo_id']
        fork = data['fork']
        result = generate_group_score(repo_id)
        # Return the result
        return jsonify(code=200, flag=True, message="Group score generated successfully", data={"rows": result})
    except Exception as e:
        print(e)
        return jsonify(code=500, flag=False, message="Failed to generate group score")

@genaibp.route('/genai_student/<user_id>', methods=['POST'])
def generate_std_info(user_id):
    try:
        data = request.get_json()
        user_id = data['user_id']
        fork = data['fork']
        result = generate_std_score(user_id)
        # Return the result
        return jsonify(code=200, flag=True, message="Student score generated successfully", data={"rows": result})
    except Exception as e:
        print(e)
        return jsonify(code=500, flag=False, message="Failed to generate student score")

@genaibp.route('/genai', methods=['POST'])
def generate_other_info():
    try:
        data = request.get_json()
        text = data['text']
        result = generate_group_score(text)
        # Return the result
        return jsonify(code=200, flag=True, message="successfully", data={"rows": result})
    except Exception as e:
        print(e)
        return jsonify(code=500, flag=False, message="Failed to generate")