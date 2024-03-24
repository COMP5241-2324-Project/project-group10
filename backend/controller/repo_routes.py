from flask import Blueprint, jsonify
from sqlalchemy import desc

from ..model import repoModel

repobp = Blueprint('repo', import_name=__name__)


@repobp.route('/get_repo/<repo_id>', methods=['GET'])
def get_repo_info(repo_id):
    try:
        repo = repoModel.Repo.query.filter_by(repo_id=repo_id).order_by(desc(repoModel.Repo.update_time)).first()
        if repo is None:
            return jsonify(code=201, flag=False, message="Not exist repo")
        return jsonify(code=200, flag=True, message="查询成功", data={"rows": repo.as_dict()})
    except Exception as e:
        print(e)
        return jsonify(code=404, flag=False, message="Fail")
