import google.generativeai as genai

API_KEY = "AIzaSyA5AcrN9fAW-PrGzPRG3kEfX1OftWssT3k"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-pro')

messages = [
        {'role':'user',
        'parts': ["小组作业往往通过github进行提交，我们将4～6人分为一个小组，每个小组拥有一个代码仓库。我们的任务是通过对github数据进行分析，从而对每个小组进行打分，生成小组文档，同时也需要对每个学生进行打分，生成学生文档"]}
    ]
response_model = model.generate_content(messages)

def generate_std_score(std_name):
    messages.append({'role':'model',
                 'parts':[response_model.text]})

    messages.append({'role':'user',
                 'parts':[f"现在有一个学生{std_name}，请生成一个学生文档"]})
    response = model.generate_content(messages)
    return response

def generate_group_score(group_name):
    messages.append({'role':'model',
                 'parts':[response_model.text]})

    messages.append({'role':'user',
                 'parts':[f"现在有一个小组{group_name}，请生成一个小组文档"]})
    response = model.generate_content(messages)
    return response

def generate_other(text):
    response = model.generate_content(text)
    return response


student_report = generate_std_score('alien')
print(student_report)
group_report = generate_group_score('group_10')
print(group_report)
text = 'tell me what day is today'
other = generate_other(text)
print(text)
