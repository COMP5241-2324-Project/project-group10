from backend import db


class Repo(db.Model):
    """存储库表"""
    __tablename__ = "repo_library"
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(255))
    create_user = db.Column(db.Integer)
    create_time = db.Column(db.DateTime)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        return '<Repo {}>'.format(self.name)