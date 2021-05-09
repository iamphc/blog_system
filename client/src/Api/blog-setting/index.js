import axios from "axios"

export default {
  // TODO:设置主题颜色
  setThemeColor(options) {
    return axios.post("/api/blog-setting/theme", {
      ...options
    })
  },

  // TODO:获取所有主题颜色
  getThemeColor(userName) {
    return axios.get(`/api/blog-setting/theme/?userName=${userName}`)
  }
}