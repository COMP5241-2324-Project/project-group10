//const { use } = require("marked");

var urlParams = new URLSearchParams(window.location.search);
var userid = urlParams.get('userid');
var orgname = urlParams.get('orgname');
var reponame = urlParams.get('reponame');
console.log(orgname);
console.log(reponame);
console.log(userid);

var raw = {
  "code": 0,
  "message": "string",
  "data": {
    "user_id": 0,
    "repo_id": 0,
    "user_name": "string",
    "user_team_name": "string",
    "user_contributions": 0,
    "user_commits": 0,
    "user_issuses_raised": 0,
    "user_pull_request": 0,
    "cur_time": "string"
  }
};

// userid="156690386"
// reponame= "week-4-lab-environment-23000633g"

async function fetchData_user(userid, reponame) {
  // userid="156690386"
  // reponame= "week-4-lab-environment-23000633g"
  //const response = await fetch("http://127.0.0.1:5001/user/get_user/" + userid + "/" + reponame);
  //const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/user/get_user/" + userid + "/" + reponame);
  const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/user/get_user/" + userid + "/" + reponame);

  //const response = await fetch("https://studious-tribble-7vv65q69677jhrrxq-5000.app.github.dev/user/get_user/" + userid + "/" + reponame);
  const json4org = await response.json();
  //console.log(json4org);
  return json4org;
  //console.log(json4org);
}
async function fetchDataAllActivities(userid) {
  //userid="156690386"
  //const response = await fetch("http://127.0.0.1:5001/act/get_acts/" + userid);
  //const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/act/get_acts/" + userid);
  const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/act/get_acts/" + userid);
  //const response = await fetch("https://studious-tribble-7vv65q69677jhrrxq-5000.app.github.dev/act/get_acts/" + userid);
  const json4org = await response.json();
  return json4org;
}


fetchData_user(userid, reponame).then(function (data) {
  var userDetails = data.data.rows;
  console.log(userDetails);
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

  // var userContributions = userDetails.user_contributions+userDetails.user_issuses_raised+userDetails.user_pull_requests;
  // //var userCommits = userDetails.user_commits;

  // var userIssuesRaised = userDetails.user_issuses_raised;
  // var userPullRequests = userDetails.user_pull_requests;

  // var userCommits = userDetails.user_contributions;

  // var contributionsElement = document.getElementById("contributions");
  // contributionsElement.textContent = userContributions;

  // var commitsElement = document.getElementById("commits");
  // commitsElement.textContent = userCommits;

  // var issuesRaisedElement = document.getElementById("issuesRaised");
  // issuesRaisedElement.textContent = userIssuesRaised;

  // var pullRequestsElement = document.getElementById("pullRequests");
  // pullRequestsElement.textContent = userPullRequests;

  fetchDataAllActivities(userid).then(function (data) {

    var json4user = data;
    console.log(json4user);
    var userCommits = 0;
    var userIssuesRaised = 0;
    var userPullRequests = 0;
    var userContributions = 0;
    for (var i = 0; i < json4user.data.rows.length; i++) {
      if (json4user.data.rows[i].type == "PushEvent") {
        userCommits++;
      }
      if (json4user.data.rows[i].type == "IssuesEvent") {
        userIssuesRaised++;
      }
      if (json4user.data.rows[i].type == "PullRequestEvent") {
        userPullRequests++;
      }
    }
    userContributions = userCommits + userIssuesRaised + userPullRequests;

    var contributionsElement = document.getElementById("contributions");
    contributionsElement.textContent = userContributions;

    var commitsElement = document.getElementById("commits");
    commitsElement.textContent = userCommits;

    var issuesRaisedElement = document.getElementById("issuesRaised");
    issuesRaisedElement.textContent = userIssuesRaised;

    var pullRequestsElement = document.getElementById("pullRequests");
    pullRequestsElement.textContent = userPullRequests;
    var commitTable = document.getElementById("commitTable");

    var actChart = echarts.init(document.getElementById('indiActChart'));

    option4 = {
      title: {
        text: 'Student Activities',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Commits', 'Issues', 'Pull Requests'],
        textStyle: {
          color: '#fff'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['MarWeek2', 'MarWeek3', 'MarWeek4', 'AprWeek1'],
        axisLabel: {
          color: '#fff'
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Commits',
          type: 'line',
          data: [1, 0, 0, 9]
        },
        {
          name: 'Issues',
          type: 'line',
          data: [0, 0, 4, 0]
        },
        {
          name: 'Pull Requests',
          type: 'line',
          data: [0, 0, 0, 1]
        }
      ]
    };
    actChart.setOption(option4);



    // 创建表格
    var commitTableContent = createTableContent(json4user, json4user.data.rows.length);
    commitTable.appendChild(commitTableContent);

    // 创建 limitTable 表格
    var limitCommitTable = document.getElementById("limitCommitTable");
    var limitTableContent = createTableContent(json4user, 4);
    limitCommitTable.appendChild(limitTableContent);

    function createTableContent(json4user, limit) {
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

      var rowCount = Math.min(limit, json4user.data.rows.length);

      for (var i = 0; i < rowCount; i++) {
        var rowData = json4user.data.rows[i];

        if (rowData.type == "PushEvent") {
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

      return table;
    }



    var issueTable = document.getElementById("issueTable");
    var issueTableContent = createIssueTableContent(json4user, json4user.data.rows.length);
    issueTable.appendChild(issueTableContent);

    var limiitIssueTable = document.getElementById("limiitIssueTable");
    var limiitIssueTableContent = createIssueTableContent(json4user, 4);
    limiitIssueTable.appendChild(limiitIssueTableContent);

    function createIssueTableContent(json4user, limit) {
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

      var rowCount = Math.min(limit, json4user.data.rows.length);

      for (var i = 0; i < rowCount; i++) {
        var rowData = json4user.data.rows[i];

        if (rowData.type == "IssuesEvent") {
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

      return table;
    }



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

      if (rowData.type == "PullRequestEvent") {
        var dataRow = document.createElement("tr");

        var dataCell1 = createStyledCell('20%');
        dataCell1.textContent = rowData.activities_date;

        var dataCell2 = createStyledCell('20%');
        var link = document.createElement("a");
        link.href = "#";
        link.textContent = '-';
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


    // 初始状态下只显示 commitTable

    commitTable.style.display = "none";
    limitCommitTable.style.display = "table";
    moreCommitButton.style.display = "block";
    closeCommitButton.style.display = "none";

    issueTable.style.display = "none";
    limiitIssueTable.style.display = "none";
    moreIssueButton.style.display = "none";
    closeIssueButton.style.display = "none";

    pullTable.style.display = "none";


    commitButton.addEventListener("click", function () {
      commitTable.style.display = "none";
      limitCommitTable.style.display = "table";
      moreCommitButton.style.display = "block";
      closeCommitButton.style.display = "none";

      issueTable.style.display = "none";
      limiitIssueTable.style.display = "none";
      moreIssueButton.style.display = "none";
      closeIssueButton.style.display = "none";

      pullTable.style.display = "none";

    });

    moreCommitButton.addEventListener("click", function () {
      commitTable.style.display = "table";
      limitCommitTable.style.display = "none";
      moreCommitButton.style.display = "none";
      closeCommitButton.style.display = "block";

      issueTable.style.display = "none";
      limiitIssueTable.style.display = "none";
      moreIssueButton.style.display = "none";
      closeIssueButton.style.display = "none";

      pullTable.style.display = "none";

    });

    closeCommitButton.addEventListener("click", function () {
      commitTable.style.display = "none";
      limitCommitTable.style.display = "table";
      moreCommitButton.style.display = "block";
      closeCommitButton.style.display = "none";

      issueTable.style.display = "none";
      moreIssueButton.style.display = "none";
      closeIssueButton.style.display = "none";

      pullTable.style.display = "none";
    });

    issueButton.addEventListener("click", function () {
      commitTable.style.display = "none";
      limitCommitTable.style.display = "none";
      moreCommitButton.style.display = "none";
      closeCommitButton.style.display = "none";

      issueTable.style.display = "none";
      limiitIssueTable.style.display = "table";
      moreIssueButton.style.display = "block";
      closeIssueButton.style.display = "none";

      pullTable.style.display = "none";
    });

    moreIssueButton.addEventListener("click", function () {
      limitCommitTable.style.display = "none";
      commitTable.style.display = "none";
      moreCommitButton.style.display = "none";
      closeCommitButton.style.display = "none";

      issueTable.style.display = "table";
      limiitIssueTable.style.display = "none";
      moreIssueButton.style.display = "none";
      closeIssueButton.style.display = "block";

      pullTable.style.display = "none";

    });

    closeIssueButton.addEventListener("click", function () {

      limitCommitTable.style.display = "none";
      commitTable.style.display = "none";
      moreCommitButton.style.display = "none";
      closeCommitButton.style.display = "none";

      issueTable.style.display = "none";
      limiitIssueTable.style.display = "table";
      moreIssueButton.style.display = "block";
      closeIssueButton.style.display = "none";

      pullTable.style.display = "none";
    });

    pullButton.addEventListener("click", function () {
      commitTable.style.display = "none";
      limitCommitTable.style.display = "none";
      moreCommitButton.style.display = "none";
      closeCommitButton.style.display = "none";

      issueTable.style.display = "none";
      limiitIssueTable.style.display = "none";
      moreIssueButton.style.display = "none";
      closeIssueButton.style.display = "none";

      pullTable.style.display = "table";
    });



    raw = {
      "code": 0,
      "message": "string",
      "data": {
        "user_id": userId,
        "user_name": userName,
        "user_team_name": reponame,
        "user_contributions": userContributions,
        "user_commits": userCommits,
        "user_issuses_raised": userIssuesRaised,
        "user_pull_request": userPullRequests
      }
    };

    fetchData4print(raw).then(function (data) {
      console.log(raw);
      console.log("suceess:" + data);

      var md = data.data.rows;


      document.getElementById("show_md").innerHTML = marked(md);
      document.getElementById("show_md_container").style.display = "block";


    });

  });



});



function doPrint() {
  var dom = document.getElementById('show_md');
  var win = window.open('', '_blank', 'popup=1');
  win.document.write(dom.outerHTML);
  win.print();
  win.close();

  return false;
}

function print4group() {


  fetchData_user(userid, reponame).then(function (data) {
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


    raw = {
      "code": 0,
      "message": "string",
      "data": {
        "user_id": userId,
        "user_name": userName,
        "user_team_name": reponame,
        "user_contributions": userContributions,
        /*"user_commits": userCommits,*/
        "user_issuses_raised": userIssuesRaised,
        "user_pull_request": userPullRequests
      }
    };
  });
  fetchData4print(raw).then(function (data) {

    console.log("suceess:" + data);

    var md = data.data.rows;
    //md = json4test.data.rows;
    console.log(md);
    document.getElementById("show_md").innerHTML = marked(md);
    document.getElementById("show_md_container").style.display = "block";


  });






}
async function fetchData4print(raw) {
  console.log(raw);
  const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/genai/genai_student", {
    //const response = await fetch("https://studious-tribble-7vv65q69677jhrrxq-5000.app.github.dev/genai/genai_student", {
    //const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/genai/genai_student", {
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
      "text": question,
      "method": "student"
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
    //const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/genai/genai_other", requestOptions);
    const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/genai/genai_other", requestOptions);
    const data = await response.json();
    console.log(data);
    console.log(typeof (data));
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

function goBack() {
  window.history.go(-1);
}


