function createStyledHead(width) {
    // 创建一个新的表格单元格
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



