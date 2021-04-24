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
    xAxisData.push('类目' + i)
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
  }

  defaultOption = {
    title: {
      text: '柱状图动画延迟'
    },
    legend: {
      data: ['bar', 'bar2']
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
      name: 'bar',
      type: 'bar',
      data: data1,
      emphasis: {
        focus: 'series'
      },
      animationDelay: function (idx) {
        return idx * 10;
      }
    }, {
      name: 'bar2',
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
  let PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/life-expectancy-table.json'

  let myChart = echarts.init(dom)
  let defaultOption

  axios.get(PATH).then(
    res => {
      run(res)
      const option = Object.assign(defaultOption, config)
      myChart.setOption(option)
    }
  )

  function run(_rawData) {
    // let countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];
    let countries = ['Finland', 'France', 'Germany', 'Iceland', 'Norway', 'Poland', 'Russia', 'United Kingdom'];
    let datasetWithFilters = [];
    let seriesList = [];
    echarts.util.each(countries, function (country) {
      let datasetId = 'dataset_' + country;
      datasetWithFilters.push({
        id: datasetId,
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [{
                dimension: 'Year',
                gte: 1950
              },
              {
                dimension: 'Country',
                '=': country
              }
            ]
          }
        }
      });
      seriesList.push({
        type: 'line',
        datasetId: datasetId,
        showSymbol: false,
        name: country,
        endLabel: {
          show: true,
          formatter: function (params) {
            return params.value[3] + ': ' + params.value[0];
          }
        },
        labelLayout: {
          moveOverlap: 'shiftY'
        },
        emphasis: {
          focus: 'series'
        },
        encode: {
          x: 'Year',
          y: 'Income',
          label: ['Country', 'Income'],
          itemName: 'Year',
          tooltip: ['Income'],
        }
      });
    });

    defaultOption = {
      animationDuration: 10000,
      dataset: [{
        id: 'dataset_raw',
        source: _rawData
      }].concat(datasetWithFilters),
      title: {
        text: 'Income of Germany and France since 1950'
      },
      tooltip: {
        order: 'valueDesc',
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        nameLocation: 'middle'
      },
      yAxis: {
        name: 'Income'
      },
      grid: {
        right: 140
      },
      series: seriesList
    };
  }
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