class Config(object):
    # sqlalchemy的配置参数
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:Db12345678@gz-cynosdbmysql-grp-km73xj9v.sql.tencentcdb.com:26428/githubdata"
    # 设置sqlalchemy自动跟踪数据库
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    DEBUG = True
    SECRET_KEY = "wxn"
    # 6*60*60
    EXPIRES_IN = 21600
    AUTH = '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'