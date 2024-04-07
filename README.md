   | Version | Date       | description                   | Author |
   | ---- | ---------- | ---------------------- | ---- |
   | 1.0  | 01/03/2024 | Functional requirement analysis, module design | ninowang |
   | 1.1  | 10/03/2024 | Github API interface design | Kilingbot |
   | 1.2  | 17/03/2024 | Github API interface refinement | Kilingbot |
   | 1.3  | 18/03/2024 | Front-end page framework Implemented | zyboi,Yuning,Cathy |
   | 2.0  | 20/03/2024 | OverView Page&GroupPage Implemented | zyboi |
   | 2.1  | 20/03/2024 | StudentPage Implemented | Yuning |
   | 2.2  | 21/03/2024 | Front-end interface document design | ninowang |
   | 2.3  | 24/03/2024 | Front and back end connectivity completed | Kilingbot,ninowang,zyboi,Cathy,Yuning |
   | 3.0  | 28/03/2024 | Genai function Implemented | ninowang |
   | 3.1  | 31/03/2024 | Genai connected to front and back end  | Kilingbot,ninowang,zyboi,Cathy,Yuning |
   | 3.2  | 04/04/2024 | Added genai Q&A feature to front-end | Cathy |
   | 3.3  | 06/04/2024 | Front-end page optimization | Cathy,zyboi,Yuning |

# 运行

首先需要启动后端服务器

```
python main.py
```

注意：由于google政策的原因，在中国香港无法直接使用，可以通过codespace启动后端服务器，此时注意将端口设置为公开，否则可能会出现CORS问题。

其次需要启动前端

```
cd ./frontend
python app.py
```

即可访问页面。请注意如果你想本地访问页面，请修改对应的js文件中的url地址信息。

# 效果展示

首先是主页面，该页面左上角显示当前的organization是什么

![grouppage](./img/mainpage.png)

可以通过点击页面下方的repository name 进入具体的repository展示页面：

![grouppage](./img/grouppage.png)

进入该页面，会自动调用genai生成一份小组文档，若无，请点击刷新并耐心等待。同时你也可以通过在输入框输入更多的信息来得到更多的信息。点击右上角的组员信息，你可以进去到组员的详情页面，该页面也会自动生成组员的文档，同时你也可以选择自由输入。

![grouppage](./img/studentpage.png)

组员活动一般分为commit，issue和create，你可以点击相应按钮查看该学生活动，并通过点击url链接，可以进入到该活动对应的github页面，如issue页面你可以查看该成员具体提了什么issue。

# 背景
本文档旨在定义一个Web应用程序的需求，该应用程序可以帮助教师追踪课程中不同小组的进展，并了解小组成员之间的协作情况。该应用程序将分析GitHub存储库中的各种学生活动，如提交、问题和拉取请求。它将为教师提供仪表板和统计数据，以便提供有关不同小组活动和个别学生在项目中的贡献的见解。 

# 目标 
系统的目标是帮助教师跟踪不同小组的进展，并了解学生在项目中的活动和协作。通过分析GitHub API提供的数据，系统将提供以下功能：
跟踪不同小组的活动，如提交频率、项目面板、问题、代码更改、讨论/评论、分配问题、拉取请求、里程碑、错误报告、任务完成等。 
跟踪不同学生的表现和活动。
提供仪表板和生成报告的功能，以便教师可以跟踪不同小组的进展和学生在项目中的参与度。

# 功能模块
1.学生数据收集：系统将通过GitHub API收集学生在存储库中的活动和协作数据，如提交、问题、拉取请求等。 

2.仪表板：系统应提供可视化的仪表板，以展示不同小组的活动统计数据，如提交频率、问题数量、拉取请求状态等。 

3.学生数据展示：系统应提供学生数据，显示每个学生的活动和贡献度，如提交数量、拉取请求数量、问题数量等。 

4.小组数据展示：系统应提供小组数据，显示每个小组的活动和贡献度，如小组提交数量、拉取请求数量、问题数量等。 

5.导出报告：系统应允许教师导出学生报告和小组报告，以便进行进一步分析和共享。

# 模块设计
1. 数据库模块
2. GitHub APi模块，拉取，更新
3. 前端接口
4. 后端接口

# 非功能性需求
1. 响应时间
2. 出错率
3. 用户友好性

# 原型设计
参考[prototypes](https://github.com/COMP5241-2324-Project/project-group10/tree/genai_test/prototypes)

# 接口设计
1. GITHUB API使用：这些接口主要用于从github api获取所需数据之后，持久化存储到本地数据库。
2. 后端接口框架：MySQL + Flask
3. 数据库类型：Mysql + Navicat管理
4. 后端测试接口工具：POSTMAN 
5. 在线GITHUB API测试地址：https://github.apifox.cn/

| 接口地址 | 接口路径  | 所需返回参数 | 功能描述 |
|-------|-------|---------|---------|
| orgs.Get an organization   | GET /orgs/{org} | id,description,followers,public_repos,total_private_repos | 获得某个组织的Id,描述,followers,公开的repos和私有的repos的个数|
| repos.List organization repositories   | GET /orgs/{org}/repos | id,name,created_at,forks_count,stargazers_count,watchers_count,language| 获得某个组织下所有组织库的name,id,forks_count,stargazers_count,watchers_count,language等（在Org层展示repos列表，实现跳转repos层|
| repos.List commits | GET /repos/{owner}/{repo}/commits  | response.length  |获得某个存储库的commits相关情况|
| pulls.List pull requests | GET /repos/{owner}/{repo}/pulls?state=  | response.length  |获得某个存储库的pulls相关情况，通过state筛选状态|
| issues.List repository issues | GET /repos/{owner}/{repo}/issues?state=  | response.length  | 获得某个存储库的issues相关情况，通过state筛选状态|
| repos.List repository contributors | GET /repos/{owner}/{repo}/contributors  | login, name, email, contributions  |获得某个存储库的所有的contributors ,contributions相关情况用于rank和拉取某个存储库下所有的贡献者列表（实现页面跳转）|
| repos.Get all contributor commit activity | GET /repos/{owner}/{repo}/stats/contributors  | author, total|获得某个存储库下的用户的贡献数量|
| repos.List repository teams | GET /repos/{owner}/{repo}/teams  | name |获得某个存储库下的team -> user所属的team |
| activities相关接口 |  |  | 获取某个用户最近一周/一个月/一年的所有的代码活动（pull,commit,create...) |


2. 前后端交换接口：


| 接口 | 路径  | 返回参数 |
|---------|---------|---------|

前端接口详情：https://apifox.com/apidoc/shared-0cdff960-eff9-4893-a45e-9c9897076b5c/api-156313894

# 测试
完成单元测试，参考[test](https://github.com/COMP5241-2324-Project/project-group10/tree/genai_test/test)

# 里程碑、时间安排
| 编号 | 任务                   | 开始时间   | 结束时间   | 责任人 |
   | ---- | ---------------------- | ---------- | ---------- | ------ |
   | 1    | 功能需求分析，模块设计 | 01/03/2024 | 01/03/2024 | 王心宇 |
   | 2    | 原型设计               | 01/03/2024 | 06/03/2024 | 朱依波 |
   | 3    | 后端接口、数据库设计       | 02/03/2024 |            |    秦琳博，王心宇  |
   | 4    | 前端设计               | 01/03/2024 |            |    肖博文、徐羽凝、朱依波    |
   | 5    | 测试                   |            |            |        |
   | 6    | 完善文档[持续性]       | 01/03/2024 |            |        |

第一版发布：实现基础页面，数据库连通

第二版发布：实现github api调用，实现数据可视化

第三版发布：优化系统、修复bug
