<template>
  <el-tabs 
    class="global-statistic__wrapper"
    v-model="activeName">
    <el-tab-pane
      v-for="(pane, index) in tabPaneList"
      :key="index"
      :label="pane.label"
      :name="pane.name">
      <div class="charts-wrapper">
        <el-row class="chart-row-wrapper">
          <el-col class="chart-item" :span="12">
            <div class="chart" ref="visits"></div>
          </el-col>
          <el-col class="chart-item" :span="12">
            <div class="chart" ref="plate"></div>
          </el-col>
        </el-row>
        <el-row class="chart-row-wrapper">
          <el-col class="chart-item" :span="12">
            <div class="chart" ref="notes"></div>
          </el-col>
          <el-col class="chart-item" :span="12">
            <div class="chart"></div>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>  
  </el-tabs>
</template>

<script>
import {
  initHistogram,
  initDynamicSortLine,
  initBarOnPolar
} from "@utils/echarts" 

export default {
  data () {
    return { 
      activeName: 'basicData',
      tabPaneList: [
        {
          label: '基本数据',
          name: 'basicData',
          index: 0
        },
        {
          label: '自定义数据',
          name: 'selfData',
          index: 1
        }
      ]
    }
  },
  mounted () { 
    this.initVisits()
    this.initPlate()
    this.initNotes()
  },
  methods: {
    // 统计所有文章访问量
    initVisits () {  
      initHistogram(this.$refs.visits['0'])
    },
    // 统计每个板块的访问量
    initPlate () { 
      initDynamicSortLine(this.$refs.plate['0'])
    },
    // 统计留言
    initNotes () { 
      initBarOnPolar(this.$refs.notes['0'])
    }
  }
}
</script>