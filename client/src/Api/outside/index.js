import axios from "axios"

// 请求 key
const key = "8014036e5e2e6628d3ed0fa804dc987e" 

export default {
  // 获取历史上的今天的事件
  getHistoryToday(date) {
    return axios.get(`/todayOnhistory/queryEvent.php?key=${key}&date=${date}`)
  }
}