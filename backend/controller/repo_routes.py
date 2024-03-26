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


@repobp.route('/get_all_repos/<org_id>', methods=['GET'])
def get_allrepos(org_id):
    try:
        repos = repoModel.Repo.query.filter_by(org_id=org_id).order_by(
            desc(repoModel.Repo.update_time)).all()

        if repos is None:
            return jsonify(code=201, flag=False, message="Not exist repos")

        unique_repos = []
        repo_ids_seen = set()
        for repo in repos:
            if repo.repo_id not in repo_ids_seen:
                unique_repos.append(repo)
                repo_ids_seen.add(repo.repo_id)
        data_json = []
        for repo in unique_repos:
            data_json.append(repo.as_dict())
        return jsonify(code=200, flag=True, message="查询成功", data={"rows": data_json})
    except Exception as e:
        print(e)
        return jsonify(code=404, flag=False, message="Fail")
