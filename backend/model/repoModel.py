from backend import db


class Repo(db.Model):
    """存储库表"""
    __tablename__ = "repo"
    org_id = db.Column(db.Integer, primary_key=True)
    repo_id = db.Column(db.Integer,primary_key=True)
    repo_name = db.Column(db.String(255))
    repo_create_time = db.Column(db.DateTime)
    repo_forks = db.Column(db.Integer)
    repo_stars = db.Column(db.Integer)
    repo_watch = db.Column(db.Integer)
    repo_issues = db.Column(db.Integer)
    repo_issues_creator = db.Column(db.Integer)
    repo_issues_open = db.Column(db.Integer)
    repo_issues_close = db.Column(db.Integer)
    repo_pull = db.Column(db.Integer)
    repo_pull_open = db.Column(db.Integer)
    repo_pull_close = db.Column(db.Integer)
    repo_commites = db.Column(db.Integer)
    repo_commiter = db.Column(db.Integer)
    update_time = db.Column(db.DateTime,primary_key=True)
    repo_size = db.Column(db.Integer)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        return '<Repo {}>'.format(self.name)