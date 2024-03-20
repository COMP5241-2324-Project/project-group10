var user = [{
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
  }]



var userDetails = user[0].data;
var userName = userDetails.user_name;
var userId = userDetails.user_id;
var user_team = userDetails.repo_id;


var userDetailsElement = document.getElementById("userDetails");
userDetailsElement.innerHTML = `
  <h1><p>${userName}</p></h1>
  <p>user id ： ${userId}</p>
  <p>user team ： ${user_team}</p>
`;


var userDetails = user[0].data;
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







var json = [
    {
        "code": 89,
        "message": "success",
        "data": {
          "user_id": 62,
          "activites_date": "1971-08-02 PM 13:52:20",
          "activites_message": "N vfxpevj.",
          "activites_ur": "htt323232b/qsrm",
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
          "activites_message": "N vfxpevj.",
          "activites_ur": "htt323232b/qsrm",
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
          "activites_message": "N vfxpevj.",
          "activites_ur": "htt323232b/qsrm",
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
          "activites_message": "N vfxpevj.",
          "activites_ur": "htt323232b/qsrm",
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
          "activites_message": "Nxo vfxpevj.",
          "activites_ur": "223223m",
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
          "activites_message": "N vfxpevj.",
          "activites_ur": "htt323232b/qsrm",
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
          "activites_message": "Nxo vfxpevj.",
          "activites_ur": "223223m",
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
          "activites_message": "Nxlhz hpom fovfiwho vfxpevj.",
          "activites_ur": "http://21321313123b.bb/qsrm",
          "repo_id": 59,
          "type": "issues",
          "cur_time": "1985-12-10 AM 09:00:45"
        }
    }
];


var issueTable = document.getElementById("issueTable");

var table = document.createElement("table");

var headerRow = document.createElement("tr");
var headerCell1 = document.createElement("th");
headerCell1.textContent = "Date";
var headerCell3 = document.createElement("th");
headerCell3.textContent = "Messgae";
var headerCell2 = document.createElement("th");
headerCell2.textContent = "URL";
headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
headerRow.appendChild(headerCell3);
table.appendChild(headerRow);

for (var i = 0; i < json.length; i++) {
    var rowData = json[i].data;

    if (rowData.type == "issues") {
        var dataRow = document.createElement("tr");

        var dataCell1 = document.createElement("td");
        dataCell1.textContent = rowData.type;

        var dataCell2 = document.createElement("td");
        var link = document.createElement("a");
        link.href = rowData.activites_ur;
        link.textContent = rowData.activites_ur;
        dataCell2.appendChild(link);

        var dataCell3 = document.createElement("td");
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
var headerCell1 = document.createElement("th");
headerCell1.textContent = "Date";
var headerCell3 = document.createElement("th");
headerCell3.textContent = "Messgae";
var headerCell2 = document.createElement("th");
headerCell2.textContent = "URL";
headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
headerRow.appendChild(headerCell3);
table.appendChild(headerRow);


for (var i = 0; i < json.length; i++) {
    var rowData = json[i].data;

    if (rowData.type == "commit") {
        var dataRow = document.createElement("tr");

        var dataCell1 = document.createElement("td");
        dataCell1.textContent = rowData.type;

        var dataCell2 = document.createElement("td");
        var link = document.createElement("a");
        link.href = rowData.activites_ur;
        link.textContent = rowData.activites_ur;
        dataCell2.appendChild(link);

        var dataCell3 = document.createElement("td");
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
var headerCell1 = document.createElement("th");
headerCell1.textContent = "Date";
var headerCell3 = document.createElement("th");
headerCell3.textContent = "Messgae";
var headerCell2 = document.createElement("th");
headerCell2.textContent = "URL";
headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
headerRow.appendChild(headerCell3);
table.appendChild(headerRow);

for (var i = 0; i < json.length; i++) {
    var rowData = json[i].data;

    if (rowData.type == "pull requests") {
        var dataRow = document.createElement("tr");

        var dataCell1 = document.createElement("td");
        dataCell1.textContent = rowData.type;

        var dataCell2 = document.createElement("td");
        var link = document.createElement("a");
        link.href = rowData.activites_ur;
        link.textContent = rowData.activites_ur;
        dataCell2.appendChild(link);

        var dataCell3 = document.createElement("td");
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


commitButton.addEventListener("click", function() {
    issueTable.style.display = "none";
    commitTable.style.display = "table";
    pullTable.style.display = "none";
});


pullButton.addEventListener("click", function() {
    issueTable.style.display = "none";
    commitTable.style.display = "none";
    pullTable.style.display = "table";
});


issueButton.addEventListener("click", function() {
    issueTable.style.display = "table";
    commitTable.style.display = "none";
    pullTable.style.display = "none";
});



