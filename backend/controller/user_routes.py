from flask import Blueprint, jsonify
from sqlalchemy import desc

from ..model import stuModel

userbp = Blueprint('user', import_name=__name__)


@userbp.route('/get_user/<user_id>/<repo>', methods=['GET'])
def get_user_info(user_id, repo):
    try:
        user = stuModel.Stu.query.filter_by(user_id=user_id, repo=repo).order_by(desc(stuModel.Stu.update_time)).first()
        if user is None:
            return jsonify(code=201, flag=False, message="Not exist user")
        return jsonify(code=200, flag=True, message="查询成功", data={"rows": user.as_dict()})
    except Exception as e:
        print(e)
        return jsonify(code=404, flag=False, message="Fail")


@userbp.route('/get_all_users/<repo>', methods=['GET'])
def get_allusers(repo):
    try:
        users = stuModel.Stu.query.filter_by(repo=repo).order_by(
            desc(stuModel.Stu.update_time)).all()
        if users is None:
            return jsonify(code=201, flag=False, message="Not exist users")

        unique_users = []
        user_ids_seen = set()
        for user in users:
            if user.user_id not in user_ids_seen:
                unique_users.append(user)
                user_ids_seen.add(user.user_id)
        data_json = []
        for user in unique_users:
            data_json.append(user.as_dict())
        return jsonify(code=200, flag=True, message="查询成功", data={"rows": data_json})
    except Exception as e:
        print(e)
        return jsonify(code=404, flag=False, message="Fail")
