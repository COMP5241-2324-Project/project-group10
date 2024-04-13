import sqlite3
import pymysql.cursors

# 连接到数据库
db = pymysql.connect(host='gz-cynosdbmysql-grp-km73xj9v.sql.tencentcdb.com',
                     port=26428,
                     user='root',
                     password='Db12345678',
                     database='githubdata')

def get_total_data(repo_name):
    with db.cursor() as cursor:
        cursor.execute("SELECT org_id, update_time FROM repo WHERE repo_name=%s ORDER BY update_time DESC LIMIT 1", (repo_name,))
        result = cursor.fetchone()
        org_id, update_time = result[0], result[1]
        update_time = update_time.strftime('%Y-%m-%d')

        cursor.execute("SELECT SUM(repo_commites) FROM repo WHERE org_id=%s AND update_time LIKE %s", (org_id, update_time + '%'))
        total_commits = cursor.fetchone()[0]
        
        cursor.execute("SELECT SUM(repo_pull) FROM repo WHERE org_id=%s AND update_time LIKE %s", (org_id, update_time + '%'))
        total_pulls = cursor.fetchone()[0]

        cursor.execute("SELECT COUNT(*) FROM repo WHERE org_id=%s AND update_time LIKE %s", (org_id, update_time + '%'))
        total_repos = cursor.fetchone()[0]
        
    db.close()
    return total_commits, total_pulls, total_repos

def normalization_group_score(repo_name,group_commit,group_pull):
    total_commit, total_pull, total_repo = get_total_data(repo_name)

    nor_commit = group_commit/total_commit*total_repo
    nor_pull = group_pull/total_pull

    if nor_commit >= 1.5:
        comit_score = 10
    elif nor_commit >= 1.25:
        comit_score = 7.5
    elif nor_commit >= 0.75:
        comit_score = 5
    else:
        comit_score = 2.5

    if nor_pull >= 1.5:
        pull_score = 10
    elif nor_pull >= 1.25:
        pull_score = 7.5
    elif nor_pull >= 0.75:
        pull_score = 5
    else:
        pull_score = 2.5

    return comit_score, pull_score

# comit_score, pull_score = normalization_group_score('project-group10', 30, 0)
# print(comit_score, pull_score)

def get_group_data(user_name):
    with db.cursor() as cursor:
        cursor.execute("SELECT repo, update_time FROM student_info WHERE user_name=%s ORDER BY update_time DESC LIMIT 1", (user_name,))
        result = cursor.fetchone()
        repo_name, update_time = result[0], result[1]
        update_time = update_time.strftime('%Y-%m-%d')

        cursor.execute("SELECT SUM(user_contributions) FROM student_info WHERE repo=%s and update_time LIKE %s", (repo_name, update_time + '%'))
        total_group_commit = cursor.fetchone()[0]

        cursor.execute("SELECT SUM(user_pull_requests) FROM student_info WHERE repo=%s and update_time LIKE %s", (repo_name, update_time + '%'))
        total_group_pull = cursor.fetchone()[0]

        cursor.execute("SELECT COUNT(*) FROM student_info WHERE repo=%s and update_time LIKE %s", (repo_name, update_time + '%'))
        total_group_user = cursor.fetchone()[0]

    db.close()
    return total_group_commit, total_group_pull, total_group_user


def normalization_std_score(user_name, user_commit, user_pull):
    total_commit, total_pull, total_user = get_group_data(user_name)
    print(total_commit, total_pull, total_user)

    nor_commit = user_commit/total_commit*total_user
    if total_pull == 0:
        nor_pull = 1
    else:
        nor_pull = user_pull/total_pull*total_user

    if nor_commit >= 1.5:
        comit_score = 10
    elif nor_commit >= 1.25:
        comit_score = 7.5
    elif nor_commit >= 0.75:
        comit_score = 5
    else:
        comit_score = 2.5

    if nor_pull >= 1.5:
        pull_score = 10
    elif nor_pull >= 1.25:
        pull_score = 7.5
    elif nor_pull >= 0.75:
        pull_score = 5
    else:
        pull_score = 2.5

    return comit_score, pull_score

# comit_score, pull_score = normalization_std_score('ninowangpolyu', 24, 0)
# print(comit_score, pull_score)
