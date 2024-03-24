from flask import Blueprint, jsonify
from sqlalchemy import desc

from ..model import stuModel

userbp = Blueprint('user', import_name=__name__)


@userbp.route('/get_user/<user_id>/<repo>', methods=['GET'])
def get_repo_info(user_id, repo):
    try:
        user = stuModel.Stu.query.filter_by(user_id=user_id, repo=repo).order_by(desc(stuModel.Stu.update_time)).first()
        if user is None:
            return jsonify(code=201, flag=False, message="Not exist user")
        return jsonify(code=200, flag=True, message="查询成功", data={"rows": user.as_dict()})
    except Exception as e:
        print(e)
        return jsonify(code=404, flag=False, message="Fail")
