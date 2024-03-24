

var urlParams = new URLSearchParams(window.location.search);
var groupid = urlParams.get('groupid');
var orgname = urlParams.get('orgname');
console.log(groupid+" "+orgname);
//根据overview.js传来的groupid获取该repo(group)信息
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
// 提取json4repos中的和group相同的repo_id的repo信息
var repo = json4repos.find(function (repo) {
  return repo.data.rows.repo_id == groupid;
}).data.rows;
console.log(repo);


// 更新页面元素信息
var org_repo = document.getElementById('org_repo');
org_repo.textContent = "Repository:  " + repo.repo_name;
var repostars = document.getElementById('repostars');
repostars.textContent = repo.repo_stars;
var repoforks = document.getElementById('repoforks');
repoforks.textContent = repo.repo_forks;
var repowatch = document.getElementById('repowatch');
repowatch.textContent = repo.repo_watch;
var commits = document.getElementById('commits');
commits.textContent = repo.repo_commites;
var commiters = document.getElementById('commiters');
commiters.textContent = repo.repo_commiter;

var issuecnt = document.getElementById('issuecnt');
issuecnt.textContent = repo.repo_issues;
var issuecreator = document.getElementById('issuecreator');
if (repo.repo_issues_creator == null) {
  repo.repo_issues_creator = '-';
}
issuecreator.textContent = repo.repo_issues_creator;
var openissue = document.getElementById('openissue');
openissue.textContent = repo.repo_issues_open;
var otherissue = document.getElementById('otherissue');
otherissue.textContent = repo.repo_issues_close;



var pullcnt = document.getElementById('pullcnt');
pullcnt.textContent = repo.repo_pull;
var openpull = document.getElementById('openpull');
openpull.textContent = repo.repo_pull_open;
var closedpull = document.getElementById('closedpull');
closedpull.textContent = repo.repo_pull_close;




// 基于准备好的dom，初始化echarts实例
var issueChart = echarts.init(document.getElementById('issuechart'));

// 指定图表的配置项和数据
option1 = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      name: 'Issue Status',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 18,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: repo.repo_issues, name: 'Issue' },
        { value: repo.repo_issues_close, name: 'Closed' },
        { value: repo.repo_issues_open, name: 'Open' }
      ]
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
issueChart.setOption(option1);



// 基于准备好的dom，初始化echarts实例
var pullChart = echarts.init(document.getElementById('pullchart'));

// 指定图表的配置项和数据
option2 = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      name: 'Pull Request Status',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 18,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: repo.repo_pull_open, name: 'Open' },
        { value: repo.repo_pull_close, name: 'Closed' },
      ]
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
pullChart.setOption(option2);

//获取该组内的用户信息
json4user = [
  {
    "code": 200,
    "data": {
      "rows": {
        "repo": "ex-3122",
        "update_time": "Fri, 22 Mar 2024 19:36:20 GMT",
        "user_contributions": 1,
        "user_id": 157114473,
        "user_issuses_raised": 0,
        "user_name": "bot1",
        "user_pull_requests": 0,
        "user_team_name": "Group 10"
      }
    },
    "flag": true,
    "message": "查询成功"
  },
  {
    "code": 200,
    "data": {
      "rows": {
        "repo": "ex-3122",
        "update_time": "Fri, 22 Mar 2024 19:36:20 GMT",
        "user_contributions": 2,
        "user_id": 157114474,
        "user_issuses_raised": 1,
        "user_name": "bot2",
        "user_pull_requests": 0,
        "user_team_name": "Group 10"
      }
    },
    "flag": true,
    "message": "查询成功"
  },
  {
    "code": 200,
    "data": {
      "rows": {
        "repo": "ex-3122",
        "update_time": "Fri, 22 Mar 2024 19:36:20 GMT",
        "user_contributions": 8,
        "user_id": 157114475,
        "user_issuses_raised": 3,
        "user_name": "bot3",
        "user_pull_requests": 4,
        "user_team_name": "Group 10"
      }
    },
    "flag": true,
    "message": "查询成功"
  },
  {
    "code": 200,
    "data": {
      "rows": {
        "repo": "ex-3122",
        "update_time": "Fri, 22 Mar 2024 19:36:20 GMT",
        "user_contributions": 7,
        "user_id": 157114476,
        "user_issuses_raised": 3,
        "user_name": "bot4",
        "user_pull_requests": 3,
        "user_team_name": "Group 10"
      }
    },
    "flag": true,
    "message": "查询成功"
  },
  {
    "code": 200,
    "data": {
      "rows": {
        "repo": "ex-3122",
        "update_time": "Fri, 22 Mar 2024 19:36:20 GMT",
        "user_contributions": 6,
        "user_id": 157114477,
        "user_issuses_raised": 5,
        "user_name": "bot5",
        "user_pull_requests": 1,
        "user_team_name": "Group 10"
      }
    },
    "flag": true,
    "message": "查询成功"
  }
];

function createStyledCell(width) {
  // 创建一个新的表格单元格
  var cell = document.createElement('td');

  // 设置单元格的样式
  cell.style.border = '1px solid white';
  cell.style.textAlign = 'center';
  cell.style.padding = '.5rem';
  cell.style.color = '#fff';
  cell.style.width = width; // 设置单元格的宽度
  cell.style.height = '75px'; // 设置单元格的高度

  return cell;
}
// 先按照contributions降序排序
json4user.sort(function (a, b) {
  return b.data.rows.user_contributions - a.data.rows.user_contributions;
});

var table = document.getElementById("user-list");

for (var i = 0; i < json4user.length; i++) {

  var rowData = json4user[i].data.rows;
  console.log(rowData);
  var dataRow = document.createElement("tr");

  var dataCell1 = createStyledCell('33.3%');
  dataCell1.textContent = rowData.user_id;

  var dataCell2 = createStyledCell('33.3%');
  var link = document.createElement("a");
  link.href = "userpage.html?userid=" + encodeURIComponent(rowData.user_id) + "&orgname=" + encodeURIComponent(orgname);
  link.textContent = rowData.user_name;
  dataCell2.appendChild(link);

  var dataCell3 = createStyledCell('33.4%');
  dataCell3.textContent = rowData.user_contributions;

  dataRow.appendChild(dataCell1);
  dataRow.appendChild(dataCell2);
  dataRow.appendChild(dataCell3);

  table.appendChild(dataRow);

}

// 基于准备好的dom，初始化echarts实例
var contriChart = echarts.init(document.getElementById('contrichart'));

// 指定图表的配置项和数据
var data = json4user.map(function (user) {
  return { value: user.data.rows.user_contributions, name: user.data.rows.user_name };
});
option3 = {
  title: {
    text: 'Contributions Chart',
    left: 'center',
    top: '1%',
    textStyle: {
      color: '#fff'
    }
  },
  legend: {
    top: 'bottom'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  toolbox: {
    show: false,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Contributions',
      type: 'pie',
      radius: ['20%', '70%'],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: data
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
contriChart.setOption(option3);