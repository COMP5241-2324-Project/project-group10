

async function fetchData_org() {
  // const response = await fetch("http://172.16.5.4:5001/org/get_orgs/bot);
  const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/org/get_orgs/bot")
  //const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/org/get_orgs/bot")
  
  //const response = await fetch("https://studious-tribble-7vv65q69677jhrrxq-5000.app.github.dev/org/get_orgs/bot")
  const json4org = await response.json();
  //console.log(json4org);
  return json4org;
  //console.log(json4org);
}
async function fetchDataAllRepos(orgID) {
  // const response = await fetch("http://172.16.5.4:5001/repo/get_all_repos/" + orgID);
  //const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/repo/get_all_repos/" + orgID);
  const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/repo/get_all_repos/" + orgID);
  //const response = await fetch("https://studious-tribble-7vv65q69677jhrrxq-5000.app.github.dev/repo/get_all_repos/" + orgID);
  const json4org = await response.json();
  return json4org;
}

fetchData_org().then(function (data) {
  // 处理返回的JSON数据
  console.log(data.data);
  //选择第一个组织
  var row0 = data.data.rows[1];
  var orgID;
  var orgName;
  var orgRepoCount;
  var orgFork;
  var orgIssues;
  var orgWatch;
  var orgCommits;
  var orgCommiters;
  var orgPulls;
  var orgPullsOpen;
  var orgPullsClose;
  var orgStars;
  // 处理返回的JSON数据
  orgID = row0.org_id;
  orgName = row0.org_name;
  orgRepoCount = row0.repo_count;
  orgFork = row0.org_fork;
  orgIssues = row0.org_issues;
  orgWatch = row0.org_watch;
  orgCommits = row0.org_commits;
  orgCommiters = row0.org_commiter_num;
  orgPulls = row0.org_pull;
  orgPullsOpen = row0.org_pull_open;
  orgPullsClose = row0.org_pull_close;
  orgStars = row0.org_starts;
  console.log(orgName);
  //orgname setting
  var ognm = document.getElementById("orgname");
  ognm.textContent = "Organization:  " + orgName;
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


  // 在orgID被赋值后调用fetchDataAllRepos
  fetchDataAllRepos(orgID).then(function (data) {
    console.log(data);
    var json4repos = data.data.rows;
    // 向table中添加数据
    var table = document.getElementById("repo-list");

    for (var i = 0; i < json4repos.length; i++) {

      var rowData = json4repos[i];
      //console.log(rowData);
      var dataRow = document.createElement("tr");

      var dataCell1 = createStyledCell('20%');
      dataCell1.textContent = rowData.repo_id;

      var dataCell2 = createStyledCell('30%');
      var link = document.createElement("a");
      link.href = "grouppage.html?groupid=" + encodeURIComponent(rowData.repo_id) + "&orgname=" + encodeURIComponent(orgName);
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
    var top3Repos = json4repos.sort(function (a, b) {
      return b.repo_commites - a.repo_commites;
    }).slice(0, 3);
    var t1 = document.getElementById("t1");
    t1.textContent = top3Repos[0].repo_name;
    var t2 = document.getElementById("t2");
    t2.textContent = top3Repos[1].repo_name;
    var t3 = document.getElementById("t3");
    t3.textContent = top3Repos[2].repo_name;

  });
}).catch(function (error) {
  // 处理错误
  console.log(error);
});




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


