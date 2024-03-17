// 基于准备好的dom，初始化echarts实例
var dountChart = echarts.init(document.getElementById('Dount4MainIssue'));

var option = {
    title: {
        text: 'Status',
        left: 'center',
        top: 'center'
    },
    series: [
        {
            type: 'pie',
            data: [
                {
                    value: 335,
                    name: 'A'
                },
                {
                    value: 234,
                    name: 'B'
                },
                {
                    value: 1548,
                    name: 'C'
                },
                {
                    value: 1548,
                    name: 'D'
                },
                {
                    value: 1548,
                    name: 'E'
                },
                {
                    value: 1548,
                    name: 'F'
                }
            ],
            radius: ['40%', '70%']
        }
    ]
};

dountChart.setOption(option);


// 基于准备好的dom，初始化echarts实例
var dountChart = echarts.init(document.getElementById('Dount4MainPull'));

var option = {
    title: {
        text: 'Status',
        left: 'center',
        top: 'center'
    },
    series: [
        {
            type: 'pie',
            data: [
                {
                    value: 35,
                    name: 'A'
                },
                {
                    value: 55,
                    name: 'B'
                },
                {
                    value: 15,
                    name: 'C'
                },
                {
                    value: 78,
                    name: 'D'
                }
            ],
            radius: ['40%', '70%']
        }
    ]
};

dountChart.setOption(option);


var lineChart = echarts.init(document.getElementById('Line4MainActs'));

var option = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Commits', 'Issues', 'Pull Requests']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Commits',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230]
    },
    {
      name: 'Issues',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330]
    },
    {
      name: 'Pull Requests',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330]
    }
  ]
};

lineChart.setOption(option);