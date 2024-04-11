import Chart from 'chart.js/auto'

(async function() {
    const labels = ['MarWeek2', 'MarWeek3', 'MarWeek4', 'AprWeek1']
    const data = {
    labels: labels,
    datasets: [{
        label: 'Commits',
        data: [1,0,0,9],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    },
    {
        label: 'Issues',
        data: [0,0,4,0],
        fill: true,
        borderColor: 'rgb(175, 92, 92)',
        tension: 0,
        showLine:true
    },
    {
        label: 'Pull Requests',
        data: [0,0,0,1],
        fill: true,
        borderColor: 'rgb(192, 215, 172)',
        tension: 0,
        showLine:true
    }]
    };


  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'line',
      data: data,
    }
  );
})();