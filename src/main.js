var chartDom = document.getElementById('skills-echarts')
var myChart = echarts.init(chartDom)
var option

option = {
  tooltip: {
    trigger: 'item'
  },
  radar: {
    indicator: [
      {name: 'XXXX能力', max: 100},
      {name: 'XXXX能力', max: 100},
      {name: 'XXXX能力', max: 100},
      {name: 'XXXX能力', max: 100},
      {name: 'XXXX能力', max: 100},
      {name: 'XXXX能力', max: 100}
    ]
  },
  series: [
    {
      name: '个人能力示意图',
      type: 'radar',
      data: [
        {
          value: [75, 90, 80, 75, 76, 82]
        }
      ]
    }
  ]
}

option && myChart.setOption(option)