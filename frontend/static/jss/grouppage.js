console.log(marked);
var urlParams = new URLSearchParams(window.location.search);
var repoid = urlParams.get('groupid');
var orgname = urlParams.get('orgname');
console.log(repoid + " " + orgname);

var raw = {
  "code": 0,
  "message": "string",
  "data": {
    "repo_id": 0,
    "repo_name": "test",
    "repo_fork": 0,
    "repo_starts": 0,
    "repo_watch": 0,
    "repo_issues": 0,
    "repo_pull": 0,
    "repo_commites": 0,
    "cur_time": "string",
    "users": 0
  }
};

console.log(raw);

async function fetchData_repo(repoid) {
  //const response = await fetch("http://127.0.0.1:5001/repo/get_repo/1932083" );
  //const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/repo/get_repo/" + repoid);
  //const response = await fetch("http://127.0.0.1:5001/repo/get_repo/" + repoid);
  const response = await fetch("https://studious-tribble-7vv65q69677jhrrxq-5000.app.github.dev/repo/get_repo/" + repoid);
  const json4org = await response.json();
  //console.log(json4org);
  return json4org;
  //console.log(json4org);
}
async function fetchDataAllUsers(reponame) {

  //const response = await fetch("http://127.0.0.1:5001/user/get_all_users/" + reponame);
  const response = await fetch("https://studious-tribble-7vv65q69677jhrrxq-5000.app.github.dev/user/get_all_users/" + reponame);
  const json4org = await response.json();
  return json4org;
}





// // 提取json4repos中的和group相同的repo_id的repo信息
// var repo = json4repos.find(function (repo) {
//   return repo.data.rows.repo_id == groupid;
// }).data.rows;
// console.log(repo);

var test2 = fetchData_repo(repoid).then(function (data) {
  // 更新页面元素信息
  var repo = data.data.rows;
  console.log(data);
  var reponame = repo.repo_name;
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

  var test1 = fetchDataAllUsers(reponame).then(function (data) {
    json4user = data.data.rows;
    console.log(json4user);
    // 先按照contributions降序排序
    json4user.sort(function (a, b) {
      return b.user_contributions - a.user_contributions;
    });

    var table = document.getElementById("user-list");

    for (var i = 0; i < json4user.length; i++) {

      var rowData = json4user[i];
      console.log(rowData);
      var dataRow = document.createElement("tr");

      var dataCell1 = createStyledCell('33.3%');
      dataCell1.textContent = rowData.user_id;
      //console.log(reponame);
      var dataCell2 = createStyledCell('33.3%');
      var link = document.createElement("a");
      link.href = "userpage.html?userid=" + encodeURIComponent(rowData.user_id) + "&reponame=" + encodeURIComponent(reponame) + "&orgname=" + encodeURIComponent(orgname);
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
      return { value: user.user_contributions, name: user.user_name };
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


    raw = {
      "code": 0,
      "message": "string",
      "data": {
        "repo_id": repoid,
        "repo_name": reponame,
        "repo_fork": repoforks,
        "repo_starts": repostars,
        "repo_watch": repowatch,
        "repo_issues": issuecnt,
        "repo_pull": pullcnt,
        "repo_commites": commits,
        "cur_time": "string",
        "users": json4user
      }
    };

    print4group(raw);



    return raw;
  });


  return test1;

});

// fetchDataAllUsers().then(function (data) {
//   // Add your code here
// });

console.log(test2);


function print4group() {

  fetchData_repo(repoid).then(function (data) {
    // 更新页面元素信息
    var repo = data.data.rows;
    console.log(data);
    var reponame = repo.repo_name;
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


    fetchDataAllUsers(reponame).then(function (data) {
      json4user = data.data.rows;
      console.log(json4user);
      // 先按照contributions降序排序
      json4user.sort(function (a, b) {
        return b.user_contributions - a.user_contributions;
      });


      raw = {
        "code": 0,
        "message": "string",
        "data": {
          "repo_id": repoid,
          "repo_name": reponame,
          "repo_fork": repoforks,
          "repo_starts": repostars,
          "repo_watch": repowatch,
          "repo_issues": issuecnt,
          "repo_pull": pullcnt,
          "repo_commites": commits,
          "cur_time": "string",
          "users": json4user
        }
      };
    });
    function loadScript(url) {
      return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = url;
          script.onload = resolve;
          script.onerror = reject;
          document.head.append(script);
      });
  }
  
  loadScript('https://cdn.jsdelivr.net/npm/marked/marked.min.js')
      .then(() => {
          console.log('Script loaded successfully.');
          
          // 在这里添加你的代码
          
          fetchData4print(raw).then(function (data) {
            // Add your code here
            console.log("suceess");
            var md = data.data.rows;
            document.getElementById("show_md").innerHTML = marked(md);
          });
      })
      .catch(error => {
          console.error('Error loading script:', error);
      });

  });
}

async function fetchData4print(raw) {
  console.log(raw);
  //const response = await fetch("http://127.0.0.1:5001/user/get_all_users/" + reponame);
  const response = await fetch("https://studious-tribble-7vv65q69677jhrrxq-5000.app.github.dev/genai/genai_group", {
    method: 'POST', // 或者 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(raw),
  });
  const json4print = await response.json();
  console.log(json4print);
  return json4print;
}







//获取该组内的用户信息
// json4user = [
//   {
//     "code": 200,
//     "data": {
//       "rows": {
//         "repo": "ex-3122",
//         "update_time": "Fri, 22 Mar 2024 19:36:20 GMT",
//         "user_contributions": 1,
//         "user_id": 157114473,
//         "user_issuses_raised": 0,
//         "user_name": "bot1",
//         "user_pull_requests": 0,
//         "user_team_name": "Group 10"
//       }
//     },
//     "flag": true,
//     "message": "查询成功"
//   },
//   {
//     "code": 200,
//     "data": {
//       "rows": {
//         "repo": "ex-3122",
//         "update_time": "Fri, 22 Mar 2024 19:36:20 GMT",
//         "user_contributions": 2,
//         "user_id": 157114474,
//         "user_issuses_raised": 1,
//         "user_name": "bot2",
//         "user_pull_requests": 0,
//         "user_team_name": "Group 10"
//       }
//     },
//     "flag": true,
//     "message": "查询成功"
//   },
//   {
//     "code": 200,
//     "data": {
//       "rows": {
//         "repo": "ex-3122",
//         "update_time": "Fri, 22 Mar 2024 19:36:20 GMT",
//         "user_contributions": 8,
//         "user_id": 157114475,
//         "user_issuses_raised": 3,
//         "user_name": "bot3",
//         "user_pull_requests": 4,
//         "user_team_name": "Group 10"
//       }
//     },
//     "flag": true,
//     "message": "查询成功"
//   },
//   {
//     "code": 200,
//     "data": {
//       "rows": {
//         "repo": "ex-3122",
//         "update_time": "Fri, 22 Mar 2024 19:36:20 GMT",
//         "user_contributions": 7,
//         "user_id": 157114476,
//         "user_issuses_raised": 3,
//         "user_name": "bot4",
//         "user_pull_requests": 3,
//         "user_team_name": "Group 10"
//       }
//     },
//     "flag": true,
//     "message": "查询成功"
//   },
//   {
//     "code": 200,
//     "data": {
//       "rows": {
//         "repo": "ex-3122",
//         "update_time": "Fri, 22 Mar 2024 19:36:20 GMT",
//         "user_contributions": 6,
//         "user_id": 157114477,
//         "user_issuses_raised": 5,
//         "user_name": "bot5",
//         "user_pull_requests": 1,
//         "user_team_name": "Group 10"
//       }
//     },
//     "flag": true,
//     "message": "查询成功"
//   }
// ];

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

