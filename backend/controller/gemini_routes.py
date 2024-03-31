from flask import Blueprint, jsonify, request
from gemini.gemini_test import generate_std_score, generate_group_score, generate_other

genaibp = Blueprint('genai', import_name=__name__)


@genaibp.route('/genai_group', methods=['POST'])
def generate_group_info():
    try:
        data = request.get_json()
        data = data['data']
        repo_id = data['repo_id']
        result = generate_group_score(repo_id)
        # Return the result
        return jsonify(code=200, flag=True, message="Group score generated successfully", data={"rows": result})
    except Exception as e:
        print(e)
        return jsonify(code=500, flag=False, message="Failed to generate group score")

@genaibp.route('/genai_student', methods=['POST'])
def generate_std_info():
    try:
        data = request.get_json()
        data = data['data']
        user_name = data['user_name']
        result = generate_std_score(user_name)
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
        result = generate_other(text)
        # Return the result
        return jsonify(code=200, flag=True, message="successfully", data={"rows": result})
    except Exception as e:
        print(e)
        return jsonify(code=500, flag=False, message="Failed to generate")