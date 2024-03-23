from backend import db

class Act(db.Model):
    """活动表"""
    __tablename__ = "user_activities"
    user_id = db.Column(db.Integer, primary_key=True)
    activities_date = db.Column(db.DateTime)
    activities_message = db.Column(db.Text)
    activities_url = db.Column(db.Text)
    repo_id = db.Column(db.Integer, primary_key=True)
    update_time = db.Column(db.DateTime,primary_key=True)
    type = db.Column(db.Integer)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        return '<Act {}>'.format(self.name)