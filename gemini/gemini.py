import google.generativeai as genai

API_KEY = "AIzaSyA5AcrN9fAW-PrGzPRG3kEfX1OftWssT3k"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-pro')

messages = [
        {'role':'user',
        'parts': ["小组作业往往通过github进行提交，我们将4～6人分为一个小组，每个小组拥有一个代码仓库。我们的任务是通过对github数据进行分析，从而对每个小组进行打分，生成小组文档，同时也需要对每个学生进行打分，生成学生文档，用英文回答"]}
    ]
response_model = model.generate_content(messages)

def generate_other(chartext,response):
    messages.append({'role':'model',
                 'parts':[response]})
    messages.append({'role':'user',
                    'parts':[chartext]})
    response = model.generate_content(messages).text
    return response

def generate_std_score(user_name, user_contribution, user_commit, user_issue, user_create):
    messages.append({'role':'model',
                 'parts':[response_model.text]})
    msg = "现在有一个学生{user_name}，该学生的贡献值为{user_contribution}，commits数为：{user_commit}，发布的issues数为：{user_issue}，创建事件的次数为：{user_create}请生成一个学生文档".format(user_name=user_name,user_contribution=user_contribution,user_commit=user_commit,user_issue=user_issue,user_create=user_create)
    print(msg)
    messages.append({'role':'user',
                 'parts':[msg]})
    response = model.generate_content(messages).text
    return response

def generate_group_score(repo_name,group_star,group_fork,group_commit,group_issue,group_watch,group_pull,user_list):
    messages.append({'role':'model',
                 'parts':[response_model.text]})
    user_name_list = []
    for user in user_list:
        user_name_list.append(user['user_name'])
    msg = "现在有一个小组{repo_name}，这个小组成员有{user_name_list},这个小组的GitHub star数为{group_star},fork数为{group_fork},commites数为{group_commit},issues数为{group_issue},watch数为{group_watch},pull数为{group_pull},请生成一个小组文档".format(repo_name=repo_name,group_star=group_star,group_fork=group_fork,group_commit=group_commit,group_issue=group_issue,group_watch=group_watch,group_pull=group_pull,user_name_list=user_name_list)
    messages.append({'role':'user',
                 'parts':[msg]})
    response = model.generate_content(messages).text
    return response


# student_report = generate_std_score('alien')
# print(student_report)
# group_report = generate_group_score('group_10')
# print(group_report)
# test = 'tell me what day is today'
# other = generate_other(test)
# print(other)
