import * as echarts from 'echarts'
import axios from 'axios'

// 生成柱状延迟动画图
export function initHistogram(dom, {
  config,
  data
} = {}) {
  const myChart = echarts.init(dom)
  let defaultOption

  let xAxisData = []
  let data1 = []
  let data2 = []
  for (let i = 0; i < 100; i++) {
    xAxisData.push('6月' + Math.ceil((i / 7 + 1) % 30) + '日')
    data1.push(Math.abs((Math.ceil(Math.sin(i / 5) * (i / 5 - 10) + i / 6)) * 5))
    data2.push(Math.abs((Math.ceil(Math.cos(i / 5) * (i / 5 - 10) + i / 6)) * 5))
  }

  defaultOption = {
    title: {
      text: 'Lvanzn 博客访问量统计'
    },
    legend: {
      data: ['国内访问统计', '国外访问统计']
    },
    toolbox: {
      // y: 'bottom',
      feature: {
        magicType: {
          type: ['stack', 'tiled']
        },
        dataView: {},
        saveAsImage: {
          pixelRatio: 2
        }
      }
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      splitLine: {
        show: false
      }
    },
    yAxis: {},
    series: [{
      name: '国内访问统计',
      type: 'bar',
      data: data1,
      emphasis: {
        focus: 'series'
      },
      animationDelay: function (idx) {
        return idx * 10;
      }
    }, {
      name: '国外访问统计',
      type: 'bar',
      data: data2,
      emphasis: {
        focus: 'series'
      },
      animationDelay: function (idx) {
        return idx * 10 + 100;
      }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
      return idx * 5;
    }
  }

  const option = Object.assign(defaultOption, config)
  option && myChart.setOption(option)
}

// 生成动态排序折线图
export function initDynamicSortLine(dom, {
  config,
  data
} = {}) {
  let myChart = echarts.init(dom)

  var base = +new Date(2021, 6, 1);
  var oneDay = 24 * 3600 * 1000;
  var date = [];

  var data = [Math.random() * 300];

  for (var i = 1; i < 10; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  }

  const defaultOption = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    title: {
      left: 'center',
      text: '历史文章访问量统计',
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [{
      type: 'inside',
      start: 0,
      end: 10
    }, {
      start: 0,
      end: 10
    }],
    series: [{
      name: '模拟数据',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'rgb(255, 70, 131)'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgb(255, 158, 68)'
        }, {
          offset: 1,
          color: 'rgb(255, 70, 131)'
        }])
      },
      data: data
    }]
  };

  const option = Object.assign(defaultOption, config)
  option && myChart.setOption(option);
}

// 生产饼状图
export function initBarOnPolar(dom, {
  config,
  data
} = {}) {
  let myChart = echarts.init(dom)
  let defaultOption;

  const _data = [
    [5000, 10000, 6785.71],
    [4000, 10000, 6825],
    [3000, 6500, 4463.33],
    [2500, 5600, 3793.83],
    [2000, 4000, 3060],
    [2000, 4000, 3222.33],
    [2500, 4000, 3133.33],
    [1800, 4000, 3100],
    [2000, 3500, 2750],
    [2000, 3000, 2500],
    [1800, 3000, 2433.33],
    [2000, 2700, 2375],
    [1500, 2800, 2150],
    [1500, 2300, 2100],
    [1600, 3500, 2057.14],
    [1500, 2600, 2037.5],
    [1500, 2417.54, 1905.85],
    [1500, 2000, 1775],
    [1500, 1800, 1650]
  ];
  const cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
  const barHeight = 50;

  defaultOption = {
    title: {
      text: '在中国租个房子有多贵？',
      subtext: '市中心一室月租费（数据来源：https://www.numbeo.com）'
    },
    legend: {
      show: true,
      data: ['价格范围', '均值']
    },
    grid: {
      top: 100
    },
    angleAxis: {
      type: 'category',
      data: cities
    },
    tooltip: {
      show: true,
      formatter: function (params) {
        var id = params.dataIndex;
        return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
      }
    },
    radiusAxis: {},
    polar: {},
    series: [{
      type: 'bar',
      itemStyle: {
        color: 'transparent'
      },
      data: _data.map(function (d) {
        return d[0];
      }),
      coordinateSystem: 'polar',
      stack: '最大最小值',
      silent: true
    }, {
      type: 'bar',
      data: _data.map(function (d) {
        return d[1] - d[0];
      }),
      coordinateSystem: 'polar',
      name: '价格范围',
      stack: '最大最小值'
    }, {
      type: 'bar',
      itemStyle: {
        color: 'transparent'
      },
      data: _data.map(function (d) {
        return d[2] - barHeight;
      }),
      coordinateSystem: 'polar',
      stack: '均值',
      silent: true,
      z: 10
    }, {
      type: 'bar',
      data: _data.map(function (d) {
        return barHeight * 2;
      }),
      coordinateSystem: 'polar',
      name: '均值',
      stack: '均值',
      barGap: '-100%',
      z: 10
    }]
  };

  const option = Object.assign(defaultOption, config)
  option && myChart.setOption(option);
}

export function initOther(dom, {
  config,
  data
} = {}) {
  let myChart = echarts.init(dom)
  let defaultOption;

  defaultOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      data: ['admin', 'member']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['2021/01', '2021/02', '2021/03', '2021/04', '2021/05', '2021/06']
    },
    series: [{
        name: 'admin',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: 'member',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      }
    ]
  };

  const option = Object.assign(defaultOption, config)
  option && myChart.setOption(option);
}