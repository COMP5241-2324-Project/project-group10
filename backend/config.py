class Config(object):
    # sqlalchemy的配置参数
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:123456@localhost:3306/githubdata"
    # 设置sqlalchemy自动跟踪数据库
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    DEBUG = True
    SECRET_KEY = "wxn"
    # 6*60*60
    EXPIRES_IN = 21600