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
var orgName = json4org.data.org_name;
var orgRepoCount = json4org.data.repo_count;
var orgFork = json4org.data.org_fork;
var orgIssues = json4org.data.org_issues;
var orgWatch = json4org.data.org_watch;
var orgCommits = json4org.data.org_commites;
var orgAuthors = json4org.data.org_author_num;
var orgCommiters = json4org.data.org_commiter_num;
var orgPulls = json4org.data.org_pull;
var orgPullsOpen = json4org.data.org_pull_open;
var orgPullsMerged = json4org.data.org_pull_merged;
var orgPullsClose = json4org.data.org_pull_close;
var orgStars = json4org.data.org_starts;

var ognm = document.getElementById("orgname");
ognm.textContent = orgName;

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
var commitauthors = document.getElementById("commitauthors");
commitauthors.textContent = orgAuthors;
var commiters = document.getElementById("commiters");
commiters.textContent = orgCommiters;

var pullcnt = document.getElementById("pullcnt");
pullcnt.textContent = orgPulls;
var openpull = document.getElementById("openpull");
openpull.textContent = orgPullsOpen;
var mergepull = document.getElementById("mergepull");
mergepull.textContent = orgPullsMerged;
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
        "code": 46,
        "message": "success",
        "data": {
            "org_id": 87,
            "repo_id": 69,
            "repo_name": "group_1",
            "repo_create_time": "2019-03-26 AM 02:50:00",
            "repo_fork": 86,
            "repo_starts": 15,
            "repo_watch": 27,
            "repo_issues": 13,
            "repo_issues_creator": 20,
            "repo_issues_open": 46,
            "repo_issues_rejected": 31,
            "repo_issues_close": 79,
            "repo_issues_in_progreess": 49,
            "repo_pull": 19,
            "repo_pull_open": 55,
            "org_pull_merged": 60,
            "org_pull_close": 15,
            "repo_commites": 26,
            "repo_commiter": 48,
            "cur_time": "2019-12-07 PM 13:49:17"
        }
    },
    {
        "code": 46,
        "message": "success",
        "data": {
            "org_id": 87,
            "repo_id": 70,
            "repo_name": "group_2",
            "repo_create_time": "2019-03-26 AM 02:50:00",
            "repo_fork": 10,
            "repo_starts": 11,
            "repo_watch": 27,
            "repo_issues": 12,
            "repo_issues_creator": 20,
            "repo_issues_open": 46,
            "repo_issues_rejected": 31,
            "repo_issues_close": 79,
            "repo_issues_in_progreess": 49,
            "repo_pull": 13,
            "repo_pull_open": 55,
            "org_pull_merged": 60,
            "org_pull_close": 15,
            "repo_commites": 24,
            "repo_commiter": 48,
            "cur_time": "2019-12-07 PM 13:49:17"
        }
    },
    {
        "code": 46,
        "message": "success",
        "data": {
            "org_id": 87,
            "repo_id": 71,
            "repo_name": "group_3",
            "repo_create_time": "2019-03-26 AM 02:50:00",
            "repo_fork": 15,
            "repo_starts": 12,
            "repo_watch": 27,
            "repo_issues": 14,
            "repo_issues_creator": 20,
            "repo_issues_open": 46,
            "repo_issues_rejected": 31,
            "repo_issues_close": 79,
            "repo_issues_in_progreess": 49,
            "repo_pull": 20,
            "repo_pull_open": 55,
            "org_pull_merged": 60,
            "org_pull_close": 15,
            "repo_commites": 52,
            "repo_commiter": 48,
            "cur_time": "2019-12-07 PM 13:49:17"
        }
    },
    {
        "code": 46,
        "message": "success",
        "data": {
            "org_id": 87,
            "repo_id": 72,
            "repo_name": "group_4",
            "repo_create_time": "2019-03-26 AM 02:50:00",
            "repo_fork": 86,
            "repo_starts": 16,
            "repo_watch": 27,
            "repo_issues": 20,
            "repo_issues_creator": 20,
            "repo_issues_open": 46,
            "repo_issues_rejected": 31,
            "repo_issues_close": 79,
            "repo_issues_in_progreess": 49,
            "repo_pull": 19,
            "repo_pull_open": 55,
            "org_pull_merged": 60,
            "org_pull_close": 15,
            "repo_commites": 25,
            "repo_commiter": 48,
            "cur_time": "2019-12-07 PM 13:49:17"
        }
    },
    {
        "code": 46,
        "message": "success",
        "data": {
            "org_id": 87,
            "repo_id": 73,
            "repo_name": "group_5",
            "repo_create_time": "2019-03-26 AM 02:50:00",
            "repo_fork": 86,
            "repo_starts": 18,
            "repo_watch": 27,
            "repo_issues": 13,
            "repo_issues_creator": 20,
            "repo_issues_open": 46,
            "repo_issues_rejected": 31,
            "repo_issues_close": 79,
            "repo_issues_in_progreess": 49,
            "repo_pull": 19,
            "repo_pull_open": 55,
            "org_pull_merged": 60,
            "org_pull_close": 15,
            "repo_commites": 19,
            "repo_commiter": 48,
            "cur_time": "2019-12-07 PM 13:49:17"
        }
    },
    {
        "code": 46,
        "message": "success",
        "data": {
            "org_id": 87,
            "repo_id": 74,
            "repo_name": "group_6",
            "repo_create_time": "2019-03-26 AM 02:50:00",
            "repo_fork": 86,
            "repo_starts": 8,
            "repo_watch": 27,
            "repo_issues": 13,
            "repo_issues_creator": 20,
            "repo_issues_open": 46,
            "repo_issues_rejected": 31,
            "repo_issues_close": 79,
            "repo_issues_in_progreess": 49,
            "repo_pull": 10,
            "repo_pull_open": 55,
            "org_pull_merged": 60,
            "org_pull_close": 15,
            "repo_commites": 33,
            "repo_commiter": 48,
            "cur_time": "2019-12-07 PM 13:49:17"
        }
    },
];

var top3Repos = json4repos.sort(function(a, b) {
    return b.data.repo_commites - a.data.repo_commites;
}).slice(0, 3);
var t1 = document.getElementById("t1");
t1.textContent = top3Repos[0].data.repo_name;
var t2 = document.getElementById("t2");
t2.textContent = top3Repos[1].data.repo_name;
var t3 = document.getElementById("t3");
t3.textContent = top3Repos[2].data.repo_name;

var table = document.getElementById("repo-list");

for (var i = 0; i < json4repos.length; i++) {
    var rowData = json4repos[i].data;

    var dataRow = document.createElement("tr");

    var dataCell1 = createStyledCell('20%');
    dataCell1.textContent = rowData.repo_id;

    var dataCell2 = createStyledCell('30%');
    var link = document.createElement("a");
    link.href = rowData.activites_ur;
    link.textContent = rowData.repo_name;
    dataCell2.appendChild(link);

    var dataCell3 = createStyledCell('12.5%');
    dataCell3.textContent = rowData.repo_starts;

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

issueTable.appendChild(table);




