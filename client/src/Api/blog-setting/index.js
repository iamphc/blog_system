import axios from "axios"

export default {
  // TODO:设置主题颜色
  setThemeColor(name) {
    return axios.post("/blog-setting/theme", {
      name
    })
  },

  // TODO:获取主题颜色
  getThemeColor() {
    return axios.get("/blog-setting/theme")
  }
}