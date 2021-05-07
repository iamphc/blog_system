<template>
  <el-row class="history-today-wrapper">
    <h3 class="title">历史上的今天</h3>
    <el-divider />
    <h4 class="today-date-title">{{getTodayStringTitle}}</h4>
    <ul class="history-today-list">
      <li 
        class="history-today-item"
        v-for="(item, index) in historyToday"
        :key="index">
        <span class="event-time">{{item.date}}</span>
        <span class="event-title">{{item.title}}</span>
      </li>
    </ul>
  </el-row>
</template>

<script>
import { Api } from '@api'
export default {
  data() {
    return {
      historyToday: {},
      todayDate: {}
    }
  },
  async created() {
    this.getDate()
    await this.getHistoryToday()
    console.log(this.historyToday) 
  },
  methods: {
    async getHistoryToday() { 
      const dateString = `${this.todayDate.month}/${this.todayDate.date}` 
      Api.outside.getHistoryToday(dateString).then(
        res => this.historyToday = res.result.slice(0, 3)
      )
    },
    getDate() {
      const date = new Date()
      this.$set(this.todayDate, 'year', date.getFullYear())
      this.$set(this.todayDate, 'month', date.getMonth() + 1)
      this.$set(this.todayDate, 'date', date.getDate() + 1) 
    }
  },
  computed: {
    getTodayStringTitle() {
      const { year, month, date } = this.todayDate 
      return `${year}年${month}月${date}日`
    }
  }
}
</script>

<style>

</style>