#!/usr/bin/python3
 
import pymysql
 
# 打开数据库连接
db = pymysql.connect(host='gz-cynosdbmysql-grp-km73xj9v.sql.tencentcdb.com',
                     port=26428,
                     user='root',
                     password='Db12345678',
                     database='githubdata')
 
# 使用 cursor() 方法创建一个游标对象 cursor
cursor = db.cursor()

 
# 关闭数据库连接
db.close()