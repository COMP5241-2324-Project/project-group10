from backend import db

class Stu(db.Model):
    """用户表"""
    __tablename__ = "student_info"
    user_id = db.Column(db.Integer, primary_key=True)
    repo = db.Column(db.String(255), primary_key=True)
    user_name = db.Column(db.String(255))
    user_team_name = db.Column(db.String(255))
    user_contributions = db.Column(db.Integer)
    user_issuses_raised = db.Column(db.Integer)
    user_pull_requests = db.Column(db.Integer)
    update_time = db.Column(db.DateTime,primary_key=True)

    def as_dict(self):
        return {c.user_name: getattr(self, c.user_name) for c in self.__table__.columns}

    def __repr__(self):
        return '<Stu {}>'.format(self.user_name)