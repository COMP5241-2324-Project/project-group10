//const {marked} =  require('marked');
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
  const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/repo/get_repo/" + repoid);
  //const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/repo/get_repo/" + repoid);
  //const response = await fetch("http://127.0.0.1:5001/repo/get_repo/" + repoid);
  //const response = await fetch("https://studious-tribble-7vv65q69677jhrrxq-5000.app.github.dev/repo/get_repo/" + repoid);
  const json4org = await response.json();
  //console.log(json4org);
  return json4org;
  //console.log(json4org);
}
async function fetchDataAllUsers(reponame) {

  //const response = await fetch("http://127.0.0.1:5001/user/get_all_users/" + reponame);
  const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/user/get_all_users/" + reponame);
  //const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/user/get_all_users/" + reponame);
  //const response = await fetch("https://studious-tribble-7vv65q69677jhrrxq-5000.app.github.dev/user/get_all_users/" + reponame);
  const json4org = await response.json();
  return json4org;
}


async function fetchData4print(raw) {
  console.log(raw);
  //const response = await fetch("http://127.0.0.1:5001/user/get_all_users/" + reponame);
  const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/genai/genai_group", {
  //const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/genai/genai_group", {

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




// // 提取json4repos中的和group相同的repo_id的repo信息
// var repo = json4repos.find(function (repo) {
//   return repo.data.rows.repo_id == groupid;
// }).data.rows;
// console.log(repo);

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

  fetchDataAllUsers(reponame).then(function (data) {
    json4user = data.data.rows;
    console.log(json4user);
    // 先按照contributions降序排序
    json4user.sort(function (a, b) {
      return b.user_contributions - a.user_contributions;
    });

    var table = document.getElementById("user-list");

    for (var i = 0; i < json4user.length; i++) {

      var rowData = json4user[i];
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
        "repo_id": repo.repo_id,
        "repo_name": repo.repo_name,
        "repo_fork": repo.repo_forks,
        "repo_starts": repo.repo_stars,
        "repo_watch": repo.repo_watch,
        "repo_issues": repo.repo_issues,
        "repo_pull": repo.repo_pull,
        "repo_commites": repo.repo_commites,
        "cur_time": "string",
        "users": json4user
      }
    };

    fetchData4print(raw).then(function (data) {

      console.log("suceess:" + data);

      var md = data.data.rows;
      console.log(md);
      //md = json4test.data.rows;

      document.getElementById("show_md").innerHTML = marked(md);
      document.getElementById("show_md_container").style.display = "block";

      // document.getElementById("print").addEventListener("click", function() {
      //   document.getElementById("show_md_container").style.display = "block";
      //});

    });


  });




});


function print4group() {

  fetchData_repo(repoid).then(function (data) {
    // 更新页面元素信息
    var repo = data.data.rows;
    var reponame = repo.repo_name;

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
          "repo_id": repo.repo_id,
          "repo_name": repo.repo_name,
          "repo_fork": repo.repo_forks,
          "repo_starts": repo.repo_stars,
          "repo_watch": repo.repo_watch,
          "repo_issues": repo.repo_issues,
          "repo_pull": repo.repo_pull,
          "repo_commites": repo.repo_commites,
          "cur_time": "string",
          "users": json4user
        }
      };

      fetchData4print(raw).then(function (data) {
        // Add your code here
        // var json4test = {
        //   "code": 200,
        //   "data": {
        //     "rows": "**小组 1234 GitHub 分析文档**\n\n**总体小组得分：8.5/10**\n\n**指标细分：**\n\n* 提交数量：9/10\n* 问题数量：8/10\n* 拉取请求数量：9/10\n* 版本数量：9/10\n\n**定性评估：**\n\n小组 1234 表现出色，在所有指标上都获得了很高的分数。他们经常提交高质量的代码，及时解决错误，并有效协作。他们的代码审查流程也很完善，拉取请求数量多，表明小组成员之间存在良好的沟通和协作。\n\n小组在以下方面表现尤为出色：\n\n* 他们能够在整个项目中保持一致的高提交频率。\n* 他们有效地使用问题跟踪器来记录错误并跟踪进度。\n* 他们通过清晰的沟通和及时的反馈积极参与代码审查。\n\n**改进建议：**\n\n虽然小组表现出色，但仍有一些领域可以改进：\n\n* 尝试增加提交的评论和文档，以提高代码的可读性和可维护性。\n* 探索使用自动化测试工具来提高代码质量。\n* 继续鼓励小组成员积极参与代码审查，以促进代码的改进和学习。\n\n**结论：**\n\n小组 1234 是一个表现出色的小组，在 GitHub 上展示了很高的产出、协作和代码质量。通过继续努力改进其流程并探索新的工具和技术，他们可以进一步提高其绩效并在未来项目中取得更大的成功。"
        //   },
        //   "flag": true,
        //   "message": "Group score generated successfully"
        // };
        console.log("suceess:" + data);

        var md = data.data.rows;
        console.log(md);
        //md = json4test.data.rows;

        document.getElementById("show_md").innerHTML = marked(md);
        document.getElementById("show_md_container").style.display = "block";

        // document.getElementById("print").addEventListener("click", function() {
        //   document.getElementById("show_md_container").style.display = "block";
        //});

      });

    });


  });
}

function doPrint() {
  var dom = document.getElementById('show_md');
  var win = window.open('', '_blank', 'popup=1');
  win.document.write(dom.outerHTML);
  win.print();
  win.close();
  return false;
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
  cell.style.height = '75px'; // 设置单元格的高度

  return cell;
}

var question;

// 在某个函数中调用 fetchResult()，使用 await 等待函数完成
async function doSearch() {
  question = document.getElementById('keywords').value;
  document.getElementById('show_md').value = '';
  if (question == "") {
    alert("Keywords can't be blank");
    return false;
  } else {
    try {
      await fetchResult(question);
    } catch (error) {
      console.log('error', error);
      var dom = document.getElementById('show_md');
      dom.innerHTML = 'Error: ' + error.message;
    }
  }
}

async function fetchResult(question) {
  var myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "code": 0,
    "message": "string",
    "data": {
      "text": question
    }
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    /*mode: 'no-cors'*/
  };

  try {
    const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/genai/genai_other", requestOptions);
    //const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/genai/genai_other", requestOptions);
    const data = await response.json();
    console.log(data);
    console.log(typeof(data));
    var dom = document.getElementById('show_md');
    //console.log(data.data.rows);
    var formattedText = data.data.rows.replace(/\n/g, "<br>");
    dom.innerHTML = formattedText;
    
  } catch (error) {
    console.log('error', error);
    var dom = document.getElementById('show_md');
    dom.innerHTML = 'Error: ' + error.message;
  }
}
