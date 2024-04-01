var urlParams = new URLSearchParams(window.location.search);
var userid = urlParams.get('userid');
var orgname = urlParams.get('orgname');
var reponame = urlParams.get('reponame');
console.log(orgname);
console.log(reponame);
console.log(userid);

// userid="156690386"
// reponame= "week-4-lab-environment-23000633g"

async function fetchData_user(userid, reponame) {
  // userid="156690386"
  // reponame= "week-4-lab-environment-23000633g"
  //const response = await fetch("http://127.0.0.1:5001/user/get_user/" + userid + "/" + reponame);
  const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/user/get_user/" + userid + "/" + reponame);
  const json4org = await response.json();
  //console.log(json4org);
  return json4org;
  //console.log(json4org);
}
async function fetchDataAllActivities(userid) {
   //userid="156690386"
  //const response = await fetch("http://127.0.0.1:5001/act/get_acts/" + userid);
  const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/act/get_acts/" + userid);
  const json4org = await response.json();
  return json4org;
}

fetchData_user(userid, reponame).then(data => {
  var userDetails = data.data.rows;
  var userName = userDetails.user_name;
  var userId = userDetails.user_id;
  var userTeam = userDetails.user_team_name;
  var nameteam = document.getElementById("nameteam");
  nameteam.textContent = " " + userTeam + "/  " + userName;
  var icon_name = document.getElementById("icon_name");
  icon_name.textContent = userName;
  var ids = document.getElementById("ids");
  ids.textContent = userId;
  var groups = document.getElementById("groups");
  groups.textContent = userTeam;

  var repo = document.getElementById("repo");
  repo.textContent = orgname + "/" + userTeam + "/" + userName;

  var userContributions = userDetails.user_contributions;
  var userCommits = userDetails.user_commits;
  var userIssuesRaised = userDetails.user_issuses_raised;
  var userPullRequests = userDetails.user_pull_requests;

  var contributionsElement = document.getElementById("contributions");
  contributionsElement.textContent = userContributions;

  // var commitsElement = document.getElementById("commits");
  // commitsElement.textContent = userCommits;

  var issuesRaisedElement = document.getElementById("issuesRaised");
  issuesRaisedElement.textContent = userIssuesRaised;

  var pullRequestsElement = document.getElementById("pullRequests");
  pullRequestsElement.textContent = userPullRequests;

  fetchDataAllActivities(userid).then(data => {
    //创建表格
    var json4user = data;
    //暂时将pushevent视为issue
    var issueTable = document.getElementById("issueTable");

    var table = document.createElement("table");

    var headerRow = document.createElement("tr");
    var headerCell1 = createStyledHead('20%');
    headerCell1.textContent = "Date";
    var headerCell2 = createStyledHead('20%');
    headerCell2.textContent = "URL";
    var headerCell3 = createStyledHead('60%');
    headerCell3.textContent = "Message";

    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
    table.appendChild(headerRow);

    for (var i = 0; i < json4user.data.rows.length; i++) {
      var rowData = json4user.data.rows[i];
      console.log(rowData);
      //本是issues，暂时将pushEvent视为issue
      if (rowData.type == "PushEvent") {
        var dataRow = document.createElement("tr");

        var dataCell1 = createStyledCell('20%');
        dataCell1.textContent = rowData.activities_date;

        var dataCell2 = createStyledCell('20%');
        var link = document.createElement("a");
        link.href = rowData.activities_url;
        link.textContent = "Activity_url";
        dataCell2.appendChild(link);
        console.log(link);

        var dataCell3 = createStyledCell('60%');
        dataCell3.textContent = rowData.activities_message;

        dataRow.appendChild(dataCell1);
        dataRow.appendChild(dataCell2);
        dataRow.appendChild(dataCell3);
        table.appendChild(dataRow);
      }
    }

    issueTable.appendChild(table);



    var commitTable = document.getElementById("commitTable");

    var table = document.createElement("table");

    var headerRow = document.createElement("tr");
    var headerCell1 = createStyledHead('20%');
    headerCell1.textContent = "Date";
    var headerCell2 = createStyledHead('20%');
    headerCell2.textContent = "URL";
    var headerCell3 = createStyledHead('60%');
    headerCell3.textContent = "Message";

    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
    table.appendChild(headerRow);


    for (var i = 0; i < json4user.data.rows.length; i++) {
      var rowData = json4user.data.rows[i];
      //暂时将createevent视为commit
      if (rowData.type == "CreateEvent") {
        var dataRow = document.createElement("tr");

        var dataCell1 = createStyledCell('20%');
        dataCell1.textContent = rowData.activities_date;

        var dataCell2 = createStyledCell('20%');
        var link = document.createElement("a");
        link.href = rowData.activities_url;
        link.textContent = "Activity_url";
        dataCell2.appendChild(link);

        var dataCell3 = createStyledCell('60%');
        dataCell3.textContent = rowData.activities_message;

        dataRow.appendChild(dataCell1);
        dataRow.appendChild(dataCell2);
        dataRow.appendChild(dataCell3);
        table.appendChild(dataRow);
      }
    }

    commitTable.appendChild(table);





    var pullTable = document.getElementById("pullTable");

    var table = document.createElement("table");

    var headerRow = document.createElement("tr");
    var headerCell1 = createStyledHead('20%');
    headerCell1.textContent = "Date";
    var headerCell2 = createStyledHead('20%');
    headerCell2.textContent = "URL";
    var headerCell3 = createStyledHead('60%');
    headerCell3.textContent = "Message";

    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
    table.appendChild(headerRow);

    for (var i = 0; i < json4user.data.rows.length; i++) {
      var rowData = json4user.data.rows[i];

      if (rowData.type == "pull requests") {
        var dataRow = document.createElement("tr");

        var dataCell1 = createStyledCell('20%');
        dataCell1.textContent = rowData.activities_date;

        var dataCell2 = createStyledCell('20%');
        var link = document.createElement("a");
        link.href = rowData.activities_url;
        link.textContent = rowData.activities_url;
        dataCell2.appendChild(link);

        var dataCell3 = createStyledCell('60%');
        dataCell3.textContent = rowData.activities_message;

        dataRow.appendChild(dataCell1);
        dataRow.appendChild(dataCell2);
        dataRow.appendChild(dataCell3);
        table.appendChild(dataRow);
      }
    }

    pullTable.appendChild(table);

    var issueButton = document.getElementById("issueButton");
    var issueTable = document.getElementById("issueTable");
    var commitButton = document.getElementById("commitButton");
    var commitTable = document.getElementById("commitTable");
    var pullButton = document.getElementById("pullButton");
    var pullTable = document.getElementById("pullTable");

    // 初始状态下只显示 issueTable
    issueTable.style.display = "table";
    commitTable.style.display = "none";
    pullTable.style.display = "none";


    commitButton.addEventListener("click", function () {
      issueTable.style.display = "none";
      commitTable.style.display = "table";
      pullTable.style.display = "none";
    });


    pullButton.addEventListener("click", function () {
      issueTable.style.display = "none";
      commitTable.style.display = "none";
      pullTable.style.display = "table";
    });


    issueButton.addEventListener("click", function () {
      issueTable.style.display = "table";
      commitTable.style.display = "none";
      pullTable.style.display = "none";
    });


  });
});


// //根据grouppage.js的url传入的userid，获取该用户信息
// var user = {
//   "code": 200,
//   "data": {
//       "rows": {
//           "repo": "project-group10",
//           "update_time": "Fri, 22 Mar 2024 19:36:20 GMT",
//           "user_contributions": 8,
//           "user_id": 157114475,
//           "user_issuses_raised": 3,
//           "user_name": "bot3",
//           "user_pull_requests": 4,
//           "user_team_name": "Group 10"
//       }
//   },
//   "flag": true,
//   "message": "查询成功"
// };
//设置页面元素内容



//提取该user活动信息
// var json4user = {
//   "code": 200,
//   "data": {
//     "rows": [
//       {
//         "activities_date": "Sat, 23 Mar 2024 14:35:50 GMT",
//         "activities_id": "36821254465",
//         "activities_message": "add grouppage",
//         "activities_url": "https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/8b068ee41a65b49df001e4aeb1ca30895457941a",
//         "repo_name": "project-group10",
//         "type": "PushEvent",
//         "update_time": "Sun, 24 Mar 2024 17:35:25 GMT",
//         "user_id": 156639687
//       },
//       {
//         "activities_date": "Sat, 23 Mar 2024 11:39:21 GMT",
//         "activities_id": "36819641749",
//         "activities_message": "update userpage",
//         "activities_url": "https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/f71746d2a03f4eb564c144ef37032bc034ef4c5e",
//         "repo_name": "project-group10",
//         "type": "PushEvent",
//         "update_time": "Sun, 24 Mar 2024 17:35:25 GMT",
//         "user_id": 156639687
//       },
//       {
//         "activities_date": "Sat, 23 Mar 2024 06:19:00 GMT",
//         "activities_id": "36817120667",
//         "activities_message": "combine userpage to frontend",
//         "activities_url": "https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/d2b6a76822b1b1a767ae3e907f8990a3bc00a6a8",
//         "repo_name": "project-group10",
//         "type": "PushEvent",
//         "update_time": "Sun, 24 Mar 2024 17:35:25 GMT",
//         "user_id": 156639687
//       },
//       {
//         "activities_date": "Sat, 23 Mar 2024 06:14:50 GMT",
//         "activities_id": "36817088824",
//         "activities_message": "add table to mainPage, savepoint1, Merge branch 'development' into js_feature, Update mainpage",
//         "activities_url": "https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/591420665594907e346347b5de220ed702ce202d, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/28b4f3fdd1720fd737004e18aedc401c170d64c2, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/e7b6d4a2270a482167d10b5fdea859c2c5ed6f1b, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/0837a6d5b9d50371f9db06f6df261b6d595a64cf",
//         "repo_name": "project-group10",
//         "type": "PushEvent",
//         "update_time": "Sun, 24 Mar 2024 17:35:25 GMT",
//         "user_id": 156639687
//       },
//       {
//         "activities_date": "Sat, 23 Mar 2024 06:06:23 GMT",
//         "activities_id": "36817028743",
//         "activities_message": "23064755G Kilingbot - db, Merge remote-tracking branch 'origin/development' into development, add frontpage frame, fix frame, Update userpage.html\n\n更改提取形式, Update userpage.js\n\n规避JS文件直接输入HTML操作, 23064755G Kilingbot - finished, Merge remote-tracking branch 'origin/development' into development, 23064755G Kilingbot - bugfix, Create userpage.css\n\ncreate css files, update ver1.0 css\n\n实现基本分区功能。仍需美化。上传验证功能, Update userpage.js\n\n修改了提取表格的形式，结合CSS使其能够不受内容影响固定列宽, Update userpage.html ver.1.5\n\n修改了页面布局，新增了头像框，对其余地方进行了页面优化，村子美化空间, bugfix_userpage, Merge branch 'development' into js_feature, Update mainpage",
//         "activities_url": "https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/633469fe3efa315313d6621b3fc28d60b1a90506, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/25f23720cb72ad19d8ae4c6d9255a34cfe5cf4a0, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/c8ca78fd94f23b397243c096cc03cc0e6503f265, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/e5e88020367e15a586043948eb62cc6844f39a54, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/93033f70a321aae70d928177c2fa29f9b6012e6e, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/8ffcb70d7c812929e93d53feed880e7a10b9649e, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/610279fbca317c5a74e0f660e1a9235c2a504a96, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/6b5f107903695396951b164e205d80f24f74da9b, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/30336c7d522c4f2b958b7c974f1b335a12aecb5a, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/9a161b718dd73194efa6e109eb63407d55f3cec6, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/ea5f5acc554f1bbecd60b6e2b0c8cd28c6ed23b4, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/c86731b5e523279f4abd7480983ab77c4bb3d618, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/8e7960ebfdfa49a011c968659f1d1d9e8916cbb4, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/17ad090511055436d7c4ff106f096e3e148a3ef4, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/e7b6d4a2270a482167d10b5fdea859c2c5ed6f1b, https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/0837a6d5b9d50371f9db06f6df261b6d595a64cf",
//         "repo_name": "project-group10",
//         "type": "PushEvent",
//         "update_time": "Sun, 24 Mar 2024 17:35:25 GMT",
//         "user_id": 156639687
//       },
//       {
//         "activities_date": "Sat, 23 Mar 2024 04:19:37 GMT",
//         "activities_id": "36816254769",
//         "activities_message": "bugfix_userpage",
//         "activities_url": "https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/17ad090511055436d7c4ff106f096e3e148a3ef4",
//         "repo_name": "project-group10",
//         "type": "PushEvent",
//         "update_time": "Sun, 24 Mar 2024 17:35:25 GMT",
//         "user_id": 156639687
//       },
//       {
//         "activities_date": "Sat, 23 Mar 2024 04:16:05 GMT",
//         "activities_id": "36816219896",
//         "activities_message": "savepoint1",
//         "activities_url": "https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/28b4f3fdd1720fd737004e18aedc401c170d64c2",
//         "repo_name": "project-group10",
//         "type": "PushEvent",
//         "update_time": "Sun, 24 Mar 2024 17:35:25 GMT",
//         "user_id": 156639687
//       },
//       {
//         "activities_date": "Sat, 23 Mar 2024 04:13:59 GMT",
//         "activities_id": "36816205005",
//         "activities_message": "",
//         "activities_url": "#",
//         "repo_name": "project-group10",
//         "type": "CreateEvent",
//         "update_time": "Sun, 24 Mar 2024 17:35:25 GMT",
//         "user_id": 156639687
//       },
//       {
//         "activities_date": "Thu, 21 Mar 2024 13:27:42 GMT",
//         "activities_id": "36761523375",
//         "activities_message": "fix frame",
//         "activities_url": "https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/e5e88020367e15a586043948eb62cc6844f39a54",
//         "repo_name": "project-group10",
//         "type": "PushEvent",
//         "update_time": "Sun, 24 Mar 2024 17:35:25 GMT",
//         "user_id": 156639687
//       },
//       {
//         "activities_date": "Thu, 21 Mar 2024 13:25:52 GMT",
//         "activities_id": "36761454831",
//         "activities_message": "add frontpage frame",
//         "activities_url": "https://api.github.com/repos/COMP5241-2324-Project/project-group10/commits/c8ca78fd94f23b397243c096cc03cc0e6503f265",
//         "repo_name": "project-group10",
//         "type": "PushEvent",
//         "update_time": "Sun, 24 Mar 2024 17:35:25 GMT",
//         "user_id": 156639687
//       }
//     ],
//     "total": 10
//   },
//   "flag": true,
//   "message": "查询成功"
// };




function createStyledHead(width) {
  var cell = document.createElement("th");
  cell.style.width = width;
  cell.style.wordWrap = "break-word";
  return cell;
}

function createStyledCell(width) {
  var cell = document.createElement("td");
  cell.style.width = width;
  cell.style.wordWrap = "break-word";
  return cell;
}





/*
var json = [
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmcyb.bb/qsrm",
      "repo_id": 59,
      "type": "issues",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmcyb.bb/qsrm",
      "repo_id": 59,
      "type": "issues",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmcyb.bb/qsrm",
      "repo_id": 59,
      "type": "issues",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmcyb.bb/qsrm",
      "repo_id": 59,
      "type": "issues",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmcyb.bb/qsrm",
      "repo_id": 59,
      "type": "issues",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmcyb.bb/qsrm",
      "repo_id": 59,
      "type": "issues",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmcyb.bb/qsrm",
      "repo_id": 59,
      "type": "issues",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmcyb.bb/qsrm",
      "repo_id": 59,
      "type": "issues",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmcyb.eewerwgvsvgsfbb/qsrm",
      "repo_id": 59,
      "type": "issues",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmcyb.bb/qsrm",
      "repo_id": 59,
      "type": "commit",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nxubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmcbbbbbbbbbbyb.bb/qsrm",
      "repo_id": 59,
      "type": "pull requests",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbmcyb.bb/qsrm",
      "repo_id": 59,
      "type": "commit",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  },
  {
    "code": 89,
    "message": "success",
    "data": {
      "user_id": 62,
      "activites_date": "1971-08-02 PM 13:52:20",
      "activites_message": "Nx  ubpjzyu flf vkexycdd rnkrfzw znm wptjxln wrtccdp hpom fovfiwho vfxpevj.",
      "activites_ur": "http://vmeeeeecyb.bb/qsrm",
      "repo_id": 59,
      "type": "issues",
      "cur_time": "1985-12-10 AM 09:00:45"
    }
  }
];
*/

// var issueTable = document.getElementById("issueTable");

// var table = document.createElement("table");

// var headerRow = document.createElement("tr");
// var headerCell1 = createStyledHead('20%');
// headerCell1.textContent = "Date";
// var headerCell2 = createStyledHead('20%');
// headerCell2.textContent = "URL";
// var headerCell3 = createStyledHead('60%');
// headerCell3.textContent = "Message";

// headerRow.appendChild(headerCell1);
// headerRow.appendChild(headerCell2);
// headerRow.appendChild(headerCell3);
// table.appendChild(headerRow);

// for (var i = 0; i < json.length; i++) {
//   var rowData = json[i].data;

//   if (rowData.type == "issues") {
//     var dataRow = document.createElement("tr");

//     var dataCell1 = createStyledCell('20%');
//     dataCell1.textContent = rowData.activites_date;

//     var dataCell2 = createStyledCell('20%');
//     var link = document.createElement("a");
//     link.href = rowData.activites_ur;
//     link.textContent = rowData.activites_ur;
//     dataCell2.appendChild(link);

//     var dataCell3 = createStyledCell('60%');
//     dataCell3.textContent = rowData.activites_message;

//     dataRow.appendChild(dataCell1);
//     dataRow.appendChild(dataCell2);
//     dataRow.appendChild(dataCell3);
//     table.appendChild(dataRow);
//   }
// }

// issueTable.appendChild(table);



// var commitTable = document.getElementById("commitTable");

// var table = document.createElement("table");

// var headerRow = document.createElement("tr");
// var headerCell1 = createStyledHead('20%');
// headerCell1.textContent = "Date";
// var headerCell2 = createStyledHead('20%');
// headerCell2.textContent = "URL";
// var headerCell3 = createStyledHead('60%');
// headerCell3.textContent = "Messgae";

// headerRow.appendChild(headerCell1);
// headerRow.appendChild(headerCell2);
// headerRow.appendChild(headerCell3);
// table.appendChild(headerRow);


// for (var i = 0; i < json.length; i++) {
//   var rowData = json[i].data;

//   if (rowData.type == "commit") {
//     var dataRow = document.createElement("tr");

//     var dataCell1 = createStyledCell('20%');
//     dataCell1.textContent = rowData.activites_date;

//     var dataCell2 = createStyledCell('20%');
//     var link = document.createElement("a");
//     link.href = rowData.activites_ur;
//     link.textContent = rowData.activites_ur;
//     dataCell2.appendChild(link);

//     var dataCell3 = createStyledCell('60%');
//     dataCell3.textContent = rowData.activites_message;

//     dataRow.appendChild(dataCell1);
//     dataRow.appendChild(dataCell2);
//     dataRow.appendChild(dataCell3);
//     table.appendChild(dataRow);
//   }
// }

// commitTable.appendChild(table);





// var pullTable = document.getElementById("pullTable");

// var table = document.createElement("table");

// var headerRow = document.createElement("tr");
// var headerCell1 = createStyledHead('20%');
// headerCell1.textContent = "Date";
// var headerCell2 = createStyledHead('20%');
// headerCell2.textContent = "URL";
// var headerCell3 = createStyledHead('60%');
// headerCell3.textContent = "Messgae";

// headerRow.appendChild(headerCell1);
// headerRow.appendChild(headerCell2);
// headerRow.appendChild(headerCell3);
// table.appendChild(headerRow);

// for (var i = 0; i < json.length; i++) {
//   var rowData = json[i].data;

//   if (rowData.type == "pull requests") {
//     var dataRow = document.createElement("tr");

//     var dataCell1 = createStyledCell('20%');
//     dataCell1.textContent = rowData.activites_date;

//     var dataCell2 = createStyledCell('20%');
//     var link = document.createElement("a");
//     link.href = rowData.activites_ur;
//     link.textContent = rowData.activites_ur;
//     dataCell2.appendChild(link);

//     var dataCell3 = createStyledCell('60%');
//     dataCell3.textContent = rowData.activites_message;

//     dataRow.appendChild(dataCell1);
//     dataRow.appendChild(dataCell2);
//     dataRow.appendChild(dataCell3);
//     table.appendChild(dataRow);
//   }
// }

// pullTable.appendChild(table);






