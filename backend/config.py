class Config(object):
    # sqlalchemy的配置参数
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:123456@118.25.153.97:3306/Xlab?charset=utf8"
    # 设置sqlalchemy自动跟踪数据库
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    DEBUG = True
    SECRET_KEY = "wxn"
    # 6*60*60
    EXPIRES_IN = 21600