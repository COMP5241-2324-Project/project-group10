from flask import Blueprint, jsonify
from sqlalchemy import desc

from ..model import actModel

actbp = Blueprint('act', import_name=__name__)


@actbp.route('/get_acts/<user_id>', methods=['GET'])
def get_org_info(user_id):
    try:
        acts = (actModel.Act.query.filter_by(user_id=user_id).
                order_by(desc(actModel.Act.activities_date), desc(actModel.Act.update_time)).limit(10).all())
        if acts is None:
            return jsonify(code=201, flag=False, message="Not exist acts")
        data_json = []
        for act in acts:
            data_json.append(act.as_dict())
        return jsonify(code=200, flag=True, message="查询成功", data={"total": len(acts), "rows": data_json})
    except Exception as e:
        print(e)
        return jsonify(code=404, flag=False, message="Fail")