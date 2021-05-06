import axios from "axios"

export default {
  // TODO:设置主题颜色
  setThemeColor(options) {
    return axios.post("/blog-setting/theme", {
      ...options
    })
  },

  // TODO:获取所有主题颜色
  getThemeColor() {
    return axios.get("/blog-setting/theme")
  }
}