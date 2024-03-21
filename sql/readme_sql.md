organization表：

| 序号 | 名称             | 数据类型 | 长度 | 允许空值 | 主键 | 默认值 | 说明 |
| ---- | ---------------- | -------- | ---- | -------- | ---- | ------ | ---- |
| 1    | org_name         | varchar  | 32   | N        | N    |        |      |
| 2    | org_id           | bigint   | 19   | N        | Y    |        |      |
| 3    | teacher_name     | varchar  | 32   | N        | N    |        |      |
| 4    | repo_count       | int      | 10   | Y        | N    | 0      |      |
| 5    | org_fork         | int      | 10   | Y        | N    | 0      |      |
| 6    | org_issues       | int      | 10   | Y        | N    | 0      |      |
| 7    | org_watch        | int      | 10   | Y        | N    | 0      |      |
| 8    | org_commites     | int      | 10   | Y        | N    | 0      |      |
| 9    | org_author_num   | int      | 10   | Y        | N    | 0      |      |
| 10   | org_commiter_num | int      | 10   | Y        | N    | 0      |      |
| 11   | org_pull         | int      | 10   | Y        | N    | 0      |      |
| 12   | org_pull_open    | int      | 10   | Y        | N    | 0      |      |
| 13   | org_pull_merged  | int      | 10   | Y        | N    | 0      |      |
| 14   | org_pull_close   | int      | 10   | Y        | N    | 0      |      |
| 15   | org_starts       | int      | 10   | Y        | N    | 0      |      |
| 16   | cur_time         | datetime | 6    | N        | Y    |        |      |

repo表：

| 序号 | 名称                    | 数据类型 | 长度 | 允许空值 | 主键 | 默认值 | 说明 |
| ---- | ----------------------- | -------- | ---- |------|----| ------ | ---- |
| 1    | org_id                  | bigint   | 19   | N    | Y  |        |      |
| 2    | repo_id                 | bigint   | 19   | N    | Y  |        |      |
| 3    | repo_name               | varchar  | 32   | N    | N  |        |      |
| 4    | repo_create_time        | datetime | 6    | N    | N  |        |      |
| 5    | repo_fork               | int      | 10   | Y    | N  | 0      |      |
| 6    | repo_starts             | int      | 10   | Y    | N  | 0      |      |
| 7    | repo_watch              | int      | 10   | Y    | N  | 0      |      |
| 8    | repo_issues             | int      | 10   | Y    | N  | 0      |      |
| 9    | repo_issues_creator     | int      | 10   | Y    | N  | 0      |      |
| 10   | repo_iusses_open        | int      | 10   | Y    | N  | 0      |      |
| 11   | repo_issues_rejected    | int      | 10   | Y    | N  | 0      |      |
| 12   | repo_issues_close       | int      | 10   | Y    | N  | 0      |      |
| 13   | repo_issues_in_progress | int      | 10   | Y    | N  | 0      |      |
| 14   | repo_pull               | int      | 10   | Y    | N  | 0      |      |
| 15   | repo_pull_open          | int      | 10   | Y    | N  | 0      |      |
| 16   | repo_pull_merged        | int      | 10   | Y    | N  | 0      |      |
| 17   | repo_pull_close         | int      | 10   | Y    | N  | 0      |      |
| 18   | repo_commites           | int      | 10   | Y    | N  | 0      |      |
| 19   | repo_commiter           | int      | 10   | Y    | N  | 0      |      |
| 20   | cur_time                | datetime | 6    | N    | Y  |        |      |

student_info表：

| 序号 | 名称                | 数据类型 | 长度 | 允许空值 | 主键 | 默认值 | 说明 |
| ---- | ------------------- | -------- | ---- | -------- | ---- | ------ | ---- |
| 1    | user_id             | bigint   | 19   | N        | Y    |        |      |
| 2    | repo_id             | bigint   | 19   | N        | Y    |        |      |
| 3    | user_name           | varchar  | 32   | N        | N    |        |      |
| 4    | user_team_name      | varchar  | 255  | N        | N    |        |      |
| 5    | user_contributions  | int      | 10   | Y        | N    | 0      |      |
| 6    | user_commits        | int      | 10   | Y        | N    | 0      |      |
| 7    | user_issuses_raised | int      | 10   | Y        | N    | 0      |      |
| 8    | user_pull_requests  | int      | 10   | Y        | N    | 0      |      |
| 9    | cur_time            | datetime | 6    | N        | Y    |        |      |

User_Activites表：

| 序号 | 名称              | 数据类型 | 长度  | 允许空值 | 主键 | 默认值                        | 说明 |
| ---- | ----------------- | -------- | ----- |------| ---- | ----------------------------- | ---- |
| 1    | user_id           | bigint   | 19    | N    | Y    |                               |      |
| 2    | activites_date    | datetime | 6     | Y    | N    |                               |      |
| 3    | activites_message | text     | 65535 | Y    | N    |                               |      |
| 4    | activites_url     | text     | 2083  | Y    | N    |                               |      |
| 5    | repo_id           | bigint   | 19    | N    | Y    |                               |      |
| 6    | cur_time          | datetime | 6     | N    | Y    |                               |      |
| 7    | type              | int      | 10    | N    | N    | [commit,issues,pull requests] |      |

