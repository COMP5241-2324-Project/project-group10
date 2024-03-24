var json4org = {
    "code": 200,
    "data": {
        "rows": [
            {
                "org_commiter_num": 82,
                "org_commits": 169,
                "org_fork": 136,
                "org_id": 155929916,
                "org_issues": 69,
                "org_name": "polyulabs",
                "org_pull": 62,
                "org_pull_close": 66,
                "org_pull_open": 57,
                "org_starts": 3,
                "org_watch": 3,
                "repo_count": 28,
                "teacher_name": "bot",
                "update_time": "Fri, 22 Mar 2024 19:37:24 GMT"
            },
            {
                "org_commiter_num": 10,
                "org_commits": 18,
                "org_fork": 0,
                "org_id": 159103350,
                "org_issues": 31,
                "org_name": "COMP5241-2324-Project",
                "org_pull": 0,
                "org_pull_close": 1,
                "org_pull_open": 1,
                "org_starts": 0,
                "org_watch": 0,
                "repo_count": 6,
                "teacher_name": "bot",
                "update_time": "Fri, 22 Mar 2024 19:31:31 GMT"
            }
        ],
        "total": 2
    },
    "flag": true,
    "message": "查询成功"
};

var orgName = json4org.data.rows[0].org_name;
var orgRepoCount = json4org.data.rows[0].repo_count;
var orgFork = json4org.data.rows[0].org_fork;
var orgIssues = json4org.data.rows[0].org_issues;
var orgWatch = json4org.data.rows[0].org_watch;
var orgCommits = json4org.data.rows[0].org_commits;
var orgCommiters = json4org.data.rows[0].org_commiter_num;
var orgPulls = json4org.data.rows[0].org_pull;
var orgPullsOpen = json4org.data.rows[0].org_pull_open;
var orgPullsClose = json4org.data.rows[0].org_pull_close;
var orgStars = json4org.data.rows[0].org_starts;
//orgname setting
var ognm = document.getElementById("orgname");
ognm.textContent = "Organization:  "+orgName; 
//repo, stars, forks, watches setting
var totalrepo = document.getElementById("totalrepo");
totalrepo.textContent = orgRepoCount;
var totalstars = document.getElementById("totalstars");
totalstars.textContent = orgStars;
var totalforks = document.getElementById("totalforks");
totalforks.textContent = orgFork;
var totalwatches = document.getElementById("totalwatches");
totalwatches.textContent = orgWatch;
//issue, commit, pull setting
var issuecnt = document.getElementById("issuecnt");
issuecnt.textContent = orgIssues;

var commitcnt = document.getElementById("commitcnt");
commitcnt.textContent = orgCommits;
var commiters = document.getElementById("commiters");
commiters.textContent = orgCommiters;

var pullcnt = document.getElementById("pullcnt");
pullcnt.textContent = orgPulls;
var openpull = document.getElementById("openpull");
openpull.textContent = orgPullsOpen;
varclosedpull = document.getElementById("closedpull");
closedpull.textContent = orgPullsClose;

function createStyledHead(width) {
    // 创建一个新的表格表头单元格
    var cell = document.createElement('th');

    // 设置单元格的样式
    cell.style.border = '1px solid white';
    cell.style.textAlign = 'center';
    cell.style.padding = '.5rem';
    cell.style.color = '#fff';
    cell.style.width = width; // 设置单元格的宽度

    return cell;
}

function createStyledCell(width) {
    // 创建一个新的表格单元格
    var cell = document.createElement('td');

    // 设置单元格的样式
    cell.style.border = '1px solid white';
    cell.style.textAlign = 'center';
    cell.style.padding = '.5rem';
    cell.style.color = '#fff';
    cell.style.width = width; // 设置单元格的宽度

    return cell;
}


var json4repos = [
    {
      "code": 200,
      "data": {
        "rows": {
          "org_id": 155929916,
          "repo_commiter": 13,
          "repo_commites": 30,
          "repo_create_time": "Mon, 22 Jan 2024 14:29:48 GMT",
          "repo_forks": 48,
          "repo_id": 746714480,
          "repo_issues": 30,
          "repo_issues_close": 3,
          "repo_issues_creator": null,
          "repo_issues_open": 38,
          "repo_name": "ex-3122",
          "repo_pull": 30,
          "repo_pull_close": 30,
          "repo_pull_open": 23,
          "repo_size": 122,
          "repo_stars": 2,
          "repo_watch": 2,
          "update_time": "Fri, 22 Mar 2024 19:35:13 GMT"
        }
      },
      "flag": true,
      "message": "查询成功"
    },
    {
      "code": 200,
      "data": {
        "rows": {
          "org_id": 155929916,
          "repo_commiter": 14,
          "repo_commites": 20,
          "repo_create_time": "Mon, 22 Jan 2024 14:29:48 GMT",
          "repo_forks": 49,
          "repo_id": 746714481,
          "repo_issues": 30,
          "repo_issues_close": 3,
          "repo_issues_creator": null,
          "repo_issues_open": 38,
          "repo_name": "ex-3122",
          "repo_pull": 30,
          "repo_pull_close": 30,
          "repo_pull_open": 23,
          "repo_size": 122,
          "repo_stars": 2,
          "repo_watch": 2,
          "update_time": "Fri, 22 Mar 2024 19:35:13 GMT"
        }
      },
      "flag": true,
      "message": "查询成功"
    },
    {
      "code": 200,
      "data": {
        "rows": {
          "org_id": 155929916,
          "repo_commiter": 13,
          "repo_commites": 33,
          "repo_create_time": "Mon, 22 Jan 2024 14:29:48 GMT",
          "repo_forks": 48,
          "repo_id": 746714482,
          "repo_issues": 30,
          "repo_issues_close": 3,
          "repo_issues_creator": null,
          "repo_issues_open": 38,
          "repo_name": "ex-3122",
          "repo_pull": 30,
          "repo_pull_close": 30,
          "repo_pull_open": 23,
          "repo_size": 122,
          "repo_stars": 2,
          "repo_watch": 2,
          "update_time": "Fri, 22 Mar 2024 19:35:13 GMT"
        }
      },
      "flag": true,
      "message": "查询成功"
    },
    {
      "code": 200,
      "data": {
        "rows": {
          "org_id": 155929916,
          "repo_commiter": 13,
          "repo_commites": 40,
          "repo_create_time": "Mon, 22 Jan 2024 14:29:48 GMT",
          "repo_forks": 48,
          "repo_id": 746714483,
          "repo_issues": 30,
          "repo_issues_close": 3,
          "repo_issues_creator": null,
          "repo_issues_open": 38,
          "repo_name": "ex-3122",
          "repo_pull": 30,
          "repo_pull_close": 30,
          "repo_pull_open": 23,
          "repo_size": 122,
          "repo_stars": 2,
          "repo_watch": 2,
          "update_time": "Fri, 22 Mar 2024 19:35:13 GMT"
        }
      },
      "flag": true,
      "message": "查询成功"
    },
    {
      "code": 200,
      "data": {
        "rows": {
          "org_id": 155929916,
          "repo_commiter": 13,
          "repo_commites": 22,
          "repo_create_time": "Mon, 22 Jan 2024 14:29:48 GMT",
          "repo_forks": 48,
          "repo_id": 746714484,
          "repo_issues": 30,
          "repo_issues_close": 3,
          "repo_issues_creator": null,
          "repo_issues_open": 38,
          "repo_name": "ex-3122",
          "repo_pull": 30,
          "repo_pull_close": 30,
          "repo_pull_open": 23,
          "repo_size": 122,
          "repo_stars": 2,
          "repo_watch": 2,
          "update_time": "Fri, 22 Mar 2024 19:35:13 GMT"
        }
      },
      "flag": true,
      "message": "查询成功"
    },
    {
      "code": 200,
      "data": {
        "rows": {
          "org_id": 155929916,
          "repo_commiter": 13,
          "repo_commites": 19,
          "repo_create_time": "Mon, 22 Jan 2024 14:29:48 GMT",
          "repo_forks": 48,
          "repo_id": 746714485,
          "repo_issues": 30,
          "repo_issues_close": 3,
          "repo_issues_creator": null,
          "repo_issues_open": 38,
          "repo_name": "ex-3122",
          "repo_pull": 30,
          "repo_pull_close": 30,
          "repo_pull_open": 23,
          "repo_size": 122,
          "repo_stars": 2,
          "repo_watch": 2,
          "update_time": "Fri, 22 Mar 2024 19:35:13 GMT"
        }
      },
      "flag": true,
      "message": "查询成功"
    },
    {
      "code": 200,
      "data": {
        "rows": {
          "org_id": 155929916,
          "repo_commiter": 13,
          "repo_commites": 31,
          "repo_create_time": "Mon, 22 Jan 2024 14:29:48 GMT",
          "repo_forks": 48,
          "repo_id": 746714486,
          "repo_issues": 30,
          "repo_issues_close": 3,
          "repo_issues_creator": null,
          "repo_issues_open": 38,
          "repo_name": "ex-3122",
          "repo_pull": 30,
          "repo_pull_close": 30,
          "repo_pull_open": 23,
          "repo_size": 122,
          "repo_stars": 2,
          "repo_watch": 2,
          "update_time": "Fri, 22 Mar 2024 19:35:13 GMT"
        }
      },
      "flag": true,
      "message": "查询成功"
    },
    {
      "code": 200,
      "data": {
        "rows": {
          "org_id": 155929916,
          "repo_commiter": 12,
          "repo_commites": 36,
          "repo_create_time": "Mon, 22 Jan 2024 14:29:48 GMT",
          "repo_forks": 48,
          "repo_id": 746714487,
          "repo_issues": 30,
          "repo_issues_close": 3,
          "repo_issues_creator": null,
          "repo_issues_open": 38,
          "repo_name": "ex-3122",
          "repo_pull": 30,
          "repo_pull_close": 30,
          "repo_pull_open": 23,
          "repo_size": 122,
          "repo_stars": 2,
          "repo_watch": 2,
          "update_time": "Fri, 22 Mar 2024 19:35:13 GMT"
        }
      },
      "flag": true,
      "message": "查询成功"
    }
  ];


// 向table中添加数据
var table = document.getElementById("repo-list");

for (var i = 0; i < json4repos.length; i++) {
    
    var rowData = json4repos[i].data.rows;
    console.log(rowData);
    var dataRow = document.createElement("tr");

    var dataCell1 = createStyledCell('20%');
    dataCell1.textContent = rowData.repo_id;

    var dataCell2 = createStyledCell('30%');
    var link = document.createElement("a");
    link.href = "grouppage.html?groupid=" + encodeURIComponent(rowData.repo_id) + "&orgname=" + encodeURIComponent(json4org.data.rows[0].org_name);
    link.textContent = rowData.repo_name;
    dataCell2.appendChild(link);

    var dataCell3 = createStyledCell('12.5%');
    dataCell3.textContent = rowData.repo_stars;

    var dataCell4 = createStyledCell('12.5%');
    dataCell4.textContent = rowData.repo_commites;

    var dataCell5 = createStyledCell('12.5%');
    dataCell5.textContent = rowData.repo_issues;

    var dataCell6 = createStyledCell('12.5%');
    dataCell6.textContent = rowData.repo_pull;

    dataRow.appendChild(dataCell1);
    dataRow.appendChild(dataCell2);
    dataRow.appendChild(dataCell3);
    dataRow.appendChild(dataCell4);
    dataRow.appendChild(dataCell5);
    dataRow.appendChild(dataCell6);

    table.appendChild(dataRow);

}

// 从json数据中找到commit数最多的三个repo 会改变json4repos的顺序 放在创建表格之后
var top3Repos = json4repos.sort(function(a, b) {
    return b.data.rows.repo_commites - a.data.rows.repo_commites;
}).slice(0, 3);
var t1 = document.getElementById("t1");
t1.textContent = top3Repos[0].data.rows.repo_name;
var t2 = document.getElementById("t2");
t2.textContent = top3Repos[1].data.rows.repo_name;
var t3 = document.getElementById("t3");
t3.textContent = top3Repos[2].data.rows.repo_name;
