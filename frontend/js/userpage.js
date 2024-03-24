var user = {
  "code": 66,
  "message": "success",
  "data": {
    "user_id": 31,
    "repo_id": 52,
    "user_name": "ninowang",
    "user_team_name": "group_10",
    "user_contributions": 99,
    "user_commits": 63,
    "user_issuses_raised": 30,
    "user_pull_request": 59,
    "cur_time": "04-03-31 am 03:50:07"
  }
};
var json4org = {
  "code": 32,
  "message": "success",
  "data": {
    "org_id": 6,
    "org_name": "COMP5241-2324-Project",
    "teacher_name": "cswclui",
    "repo_count": 23,
    "org_fork": 77,
    "org_issues": 63,
    "org_watch": 6,
    "org_commites": 94,
    "org_author_num": 28,
    "org_commiter_num": 68,
    "org_pull": 92,
    "org_pull_open": 69,
    "org_pull_merged": 40,
    "org_pull_close": 79,
    "org_starts": 17,
    "cur_time": "2024-03-21 11:01:31"
  }
};


var userDetails = user.data;
var orgname = json4org.data.org_name;
var userName = userDetails.user_name;
var userId = userDetails.user_id;
var userTeam = userDetails.user_team_name;
var nameteam = document.getElementById("nameteam");
nameteam.textContent = " " + userTeam + "/" + userName;
var icon_name = document.getElementById("icon_name");
icon_name.textContent = userName;
var ids = document.getElementById("ids");
ids.textContent = userId;
var groups = document.getElementById("groups");
groups.textContent = userTeam;

var repo = document.getElementById("repo");
repo.textContent = orgname + "/" + userTeam;

var userContributions = userDetails.user_contributions;
var userCommits = userDetails.user_commits;
var userIssuesRaised = userDetails.user_issuses_raised;
var userPullRequests = userDetails.user_pull_request;

var contributionsElement = document.getElementById("contributions");
contributionsElement.textContent = userContributions;

var commitsElement = document.getElementById("commits");
commitsElement.textContent = userCommits;

var issuesRaisedElement = document.getElementById("issuesRaised");
issuesRaisedElement.textContent = userIssuesRaised;

var pullRequestsElement = document.getElementById("pullRequests");
pullRequestsElement.textContent = userPullRequests;




// 整活隔离带


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

// 整活隔离带





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

for (var i = 0; i < json.length; i++) {
  var rowData = json[i].data;

  if (rowData.type == "issues") {
    var dataRow = document.createElement("tr");

    var dataCell1 = createStyledCell('20%');
    dataCell1.textContent = rowData.activites_date;

    var dataCell2 = createStyledCell('20%');
    var link = document.createElement("a");
    link.href = rowData.activites_ur;
    link.textContent = rowData.activites_ur;
    dataCell2.appendChild(link);

    var dataCell3 = createStyledCell('60%');
    dataCell3.textContent = rowData.activites_message;

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
headerCell3.textContent = "Messgae";

headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
headerRow.appendChild(headerCell3);
table.appendChild(headerRow);


for (var i = 0; i < json.length; i++) {
  var rowData = json[i].data;

  if (rowData.type == "commit") {
    var dataRow = document.createElement("tr");

    var dataCell1 = createStyledCell('20%');
    dataCell1.textContent = rowData.activites_date;

    var dataCell2 = createStyledCell('20%');
    var link = document.createElement("a");
    link.href = rowData.activites_ur;
    link.textContent = rowData.activites_ur;
    dataCell2.appendChild(link);

    var dataCell3 = createStyledCell('60%');
    dataCell3.textContent = rowData.activites_message;

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
headerCell3.textContent = "Messgae";

headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
headerRow.appendChild(headerCell3);
table.appendChild(headerRow);

for (var i = 0; i < json.length; i++) {
  var rowData = json[i].data;

  if (rowData.type == "pull requests") {
    var dataRow = document.createElement("tr");

    var dataCell1 = createStyledCell('20%');
    dataCell1.textContent = rowData.activites_date;

    var dataCell2 = createStyledCell('20%');
    var link = document.createElement("a");
    link.href = rowData.activites_ur;
    link.textContent = rowData.activites_ur;
    dataCell2.appendChild(link);

    var dataCell3 = createStyledCell('60%');
    dataCell3.textContent = rowData.activites_message;

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


