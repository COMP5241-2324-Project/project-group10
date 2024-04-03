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

async function fetchData4print(raw) {
  console.log(raw);
  //const response = await fetch("http://127.0.0.1:5001/user/get_all_users/" + reponame);
  const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/genai/genai_student", {
    //const response = await fetch("https://studious-tribble-7vv65q69677jhrrxq-5000.app.github.dev/genai/genai_student", {
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

  var userContributions = userDetails.user_contributions;
  //var userCommits = userDetails.user_commits;
  var userCommits = 1;
  var userIssuesRaised = userDetails.user_issuses_raised;
  var userPullRequests = userDetails.user_pull_requests;

  var contributionsElement = document.getElementById("contributions");
  contributionsElement.textContent = userContributions;

  var commitsElement = document.getElementById("commits");
  commitsElement.textContent = userCommits;



  var issuesRaisedElement = document.getElementById("issuesRaised");
  issuesRaisedElement.textContent = userIssuesRaised;

  var pullRequestsElement = document.getElementById("createEvent");
  pullRequestsElement.textContent = userPullRequests;

  fetchDataAllActivities(userid).then(function (data) {
    //创建表格
    var json4user = data;
    console.log(json4user);
    //pushevent == commit
    var issueTable = document.getElementById("commitTable");

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

    issueTable.appendChild(table);



    var commitTable = document.getElementById("issueTable");

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

      if (rowData.type == "Issues") {
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

      if (rowData.type == "CreateEvent") {
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

    // 初始状态下只显示 issueTable
    issueTable.style.display = "none";
    commitTable.style.display = "table";
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
        "user_commits": userCommits,
        "user_issuses_raised": userIssuesRaised,
        "user_pull_request": userPullRequests
      }
    };
  });
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
    //md = json4test.data.rows;

    document.getElementById("show_md").innerHTML = marked(md);
    document.getElementById("show_md_container").style.display = "block";


    // document.getElementById("print").addEventListener("click", function() {
    //   document.getElementById("show_md_container").style.display = "block";
    //});

  });

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








