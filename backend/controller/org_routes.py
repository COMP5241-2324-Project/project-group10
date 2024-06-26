from flask import Blueprint, jsonify
from sqlalchemy import desc

from ..model import orgModel

orgbp = Blueprint('org', import_name=__name__)


@orgbp.route('/get_orgs/<teacher_name>', methods=['GET'])
def get_org_info(teacher_name):
    try:
        orgs = orgModel.Org.query.filter_by(teacher_name=teacher_name).order_by(
            desc(orgModel.Org.update_time)).all()
        if orgs is None:
            return jsonify(code=201, flag=False, message="Not exist org")

        unique_orgs = []
        org_ids_seen = set()

        for org in orgs:
            if org.org_id not in org_ids_seen:
                unique_orgs.append(org)
                org_ids_seen.add(org.org_id)
        data_json = []
        for org in unique_orgs:
            data_json.append(org.as_dict())
        return jsonify(code=200, flag=True, message="查询成功", data={"total": len(orgs), "rows": data_json})
    except Exception as e:
        print(e)
        return jsonify(code=404, flag=False, message="Fail")
@orgbp.route('/test', methods=['POST'])
def get_org_infos():
    try:
        return jsonify(code=200, flag=True, message="查询成功")
    except Exception as e:
        print(e)
        return jsonify(code=404, flag=False, message="Fail")