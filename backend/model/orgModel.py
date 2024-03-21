from backend import db

class Org(db.Model):
    """组织表"""
    __tablename__ = "organization"
    org_id = db.Column(db.Integer, primary_key=True)
    org_name = db.Column(db.String(255))
    teacher_name = db.Column(db.String(255))
    repo_count = db.Column(db.Integer)
    org_fork = db.Column(db.Integer)
    org_issues = db.Column(db.Integer)
    org_watch = db.Column(db.Integer)
    org_commits = db.Column(db.Integer)
    org_author_num = db.Column(db.Integer)
    org_commiter_num = db.Column(db.Integer)
    org_pull = db.Column(db.Integer)
    org_pull_open = db.Column(db.Integer)
    org_pull_merged = db.Column(db.Integer)
    org_pull_close = db.Column(db.Integer)
    org_starts = db.Column(db.Integer)
    update_time = db.Column(db.DateTime,primary_key=True)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        return '<Org {}>'.format(self.name)