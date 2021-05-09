import axios from "axios"

export default {
  // TODO:设置主题颜色
  setThemeColor(options) {
    return axios.post("/api/blog-setting/theme", {
      ...options
    })
  }, 

  // TODO:获取用户所有可配置的主题颜色
  getThemeColor(userName) {
    return axios.get(`/api/blog-setting/theme/?userName=${userName}`)
  },

  // TODO:获取用户所有可配置主题图片资源地址
  getAllThemeImgs(userName) {
    return axios.get(`/api/blog-setting/themeimgs/?userName=${userName}`)
  }
}