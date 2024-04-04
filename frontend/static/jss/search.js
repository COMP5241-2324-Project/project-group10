var question;

// 在某个函数中调用 fetchResult()，使用 await 等待函数完成
async function doSearch() {
  question = document.getElementById('keywords').value;
  document.getElementById('content').value = '';
  if (question == "") {
    alert("Keywords can't be blank");
    return false;
  } else {
    try {
      await fetchResult(question);
    } catch (error) {
      console.log('error', error);
      var dom = document.getElementById('content');
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
    //const response = await fetch("https://bug-free-orbit-jjjvj5wgx995c5ggp-5001.app.github.dev/genai/genai_other", requestOptions);
    const response = await fetch("https://studious-space-acorn-r44qgpg79pp6255q6-5000.app.github.dev/genai/genai_other", requestOptions);
    const data = await response.json();
    console.log(data);
    console.log(typeof(data));
    var dom = document.getElementById('content');
    //console.log(data.data.rows);
    var formattedText = data.data.rows.replace(/\n/g, "<br>");
    dom.innerHTML = formattedText;
    
  } catch (error) {
    console.log('error', error);
    var dom = document.getElementById('content');
    dom.innerHTML = 'Error: ' + error.message;
  }
}
function doPrint() {
  var dom = document.getElementById('content');
  var win = window.open('', '_blank', 'popup=1');
  win.document.write(dom.outerHTML);
  win.print();
  win.close();

  return false;
}
