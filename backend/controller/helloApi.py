from flask import Blueprint, jsonify

hellobp = Blueprint('hello', __name__, url_prefix='/hello')


@hellobp.route('/')
def hello():
	result = {'code': 200, 'message': 'hello'}
	return jsonify(result)

@hellobp.route('/test')
def test():
	return "ssss"