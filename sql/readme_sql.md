organization表：

| 序号 | 名称             | 数据类型 | 长度 | 允许空值 | 主键 | 默认值 | 说明                                                      |
| ---- | ---------------- | -------- | ---- | -------- | ---- | ------ | --------------------------------------------------------- |
| 1    | org_name         | varchar  | 32   | N        | N    |        |                                                           |
| 2    | org_id           | bigint   | 19   | N        | Y    |        |                                                           |
| 3    | teacher_name     | varchar  | 32   | N        | N    |        |                                                           |
| 4    | repo_count       | int      | 10   | Y        | N    | 0      |                                                           |
| 5    | org_fork         | int      | 10   | Y        | N    | 0      |                                                           |
| 6    | org_issues       | int      | 10   | Y        | N    | 0      |                                                           |
| 7    | org_watch        | int      | 10   | Y        | N    | 0      |                                                           |
| 8    | org_commites     | int      | 10   | Y        | N    | 0      |                                                           |
| 9    | org_author_num   | int      | 10   | Y        | N    | 0      |                                                           |
| 10   | org_commiter_num | int      | 10   | Y        | N    | 0      |                                                           |
| 11   | org_pull         | int      | 10   | Y        | N    | 0      |                                                           |
| 12   | org_open_pull    | int      | 10   | Y        | N    | 0      |                                                           |
| 13   | org_merged_pull  | int      | 10   | Y        | N    | 0      |                                                           |
| 14   | org_close_pull   | int      | 10   | Y        | N    | 0      |                                                           |
| 15   | org_starts       | int      | 10   | Y        | N    | 0      |                                                           |
| 16   | cur_time         | datetime | 4    | N        | Y    |        | 存储到分钟级别，提高搜索性能<br />例如 '2024-03-17 23:28' |

repo表：

| 序号 | 名称                    | 数据类型 | 长度 | 允许空值 | 主键 | 默认值 | 说明                                                      |
| ---- | ----------------------- | -------- | ---- | -------- | ---- | ------ | --------------------------------------------------------- |
| 1    | org_id                  | bigint   | 19   | N        | Y    |        |                                                           |
| 2    | repo_id                 | bigint   | 19   | N        | Y    |        |                                                           |
| 3    | repo_name               | varchar  | 32   | N        | N    |        |                                                           |
| 4    | repo_create_time        | datetime | 4    | N        | N    |        | 存储到分钟级别，提高搜索性能<br />例如 '2024-03-17 23:28' |
| 5    | repo_fork               | int      | 10   | Y        | N    | 0      |                                                           |
| 6    | repo_starts             | int      | 10   | Y        | N    | 0      |                                                           |
| 7    | repo_watch              | int      | 10   | Y        | N    | 0      |                                                           |
| 8    | repo_issues             | int      | 10   | Y        | N    | 0      |                                                           |
| 9    | repo_issues_creator     | varchar  | 32   | N        | N    |        |                                                           |
| 10   | repo_open_issues        | int      | 10   | Y        | N    | 0      |                                                           |
| 11   | repo_rejected_issues    | int      | 10   | Y        | N    | 0      |                                                           |
| 12   | repo_close_issues       | int      | 10   | Y        | N    | 0      |                                                           |
| 13   | repo_in_progress_issues | int      | 10   | Y        | N    | 0      |                                                           |
| 14   | repo_pull_request       | int      | 10   | Y        | N    | 0      |                                                           |
| 15   | repo_open_pull_requests | int      | 10   | Y        | Y    | 0      |                                                           |
| 16   | repo_merged_pull        | int      | 10   | Y        | N    | 0      |                                                           |
| 17   | repo_close_pull         | int      | 10   | Y        | N    | 0      |                                                           |
| 18   | repo_commites           | int      | 10   | Y        | N    | 0      |                                                           |
| 19   | repo_commiter           | varchar  | 32   | N        | N    |        |                                                           |
| 20   | cur_time                | datetime | 4    | N        | Y    |        | 存储到分钟级别，提高搜索性能<br />例如 '2024-03-17 23:28' |

student_info表：

| 序号 | 名称                | 数据类型 | 长度 | 允许空值 | 主键 | 默认值 | 说明                                                      |
| ---- | ------------------- | -------- | ---- | -------- | ---- | ------ | --------------------------------------------------------- |
| 1    | user_id             | bigint   | 19   | N        | Y    |        |                                                           |
| 2    | repo_id             | bigint   | 19   | N        | Y    |        |                                                           |
| 3    | user_name           | varchar  | 32   | N        | N    |        |                                                           |
| 4    | repo_team_name      | varchar  | 255  | N        | N    |        |                                                           |
| 5    | user_contributions  | int      | 10   | Y        | N    | 0      |                                                           |
| 6    | user_commits        | int      | 10   | Y        | N    | 0      |                                                           |
| 7    | user_issuses_raised | int      | 10   | Y        | N    | 0      |                                                           |
| 8    | user_pull_requests  | int      | 10   | Y        | N    | 0      |                                                           |
| 9    | cur_time            | datetime | 4    | N        | Y    |        | 存储到分钟级别，提高搜索性能<br />例如 '2024-03-17 23:28' |

User_Activites表：

| 序号 | 名称              | 数据类型 | 长度  | 允许空值 | 主键 | 默认值                        | 说明                                                      |
| ---- | ----------------- | -------- | ----- | -------- | ---- | ----------------------------- | --------------------------------------------------------- |
| 1    | user_id           | bigint   | 19    | N        | Y    |                               |                                                           |
| 2    | activites_date    | datetime | 4     | N        | N    |                               |                                                           |
| 3    | activites_message | text     | 65535 | N        | N    |                               |                                                           |
| 4    | activites_url     | text     | 2083  | N        | N    |                               |                                                           |
| 5    | repo_id           | bigint   | 19    | N        | Y    |                               |                                                           |
| 6    | cur_time          | datetime | 4     | N        | Y    |                               | 存储到分钟级别，提高搜索性能<br />例如 '2024-03-17 23:28' |
| 7    | type              | int      | 10    | Y        | N    | [commit,issues,pull requests] |                                                           |