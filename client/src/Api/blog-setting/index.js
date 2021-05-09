import axios from "axios"

export default {
  // TODO:设置主题颜色
  setThemeColor(options) {
    return axios.post("/api/blog-setting/theme", {
      ...options
    })
  }, 

  // TODO:获取用户所有可配置的主题颜色资源地址
  getThemeColor(userName) {
    return axios.get(`/api/blog-setting/theme/?userName=${userName}`)
  },

  // TODO:获取用户所有可配置主题图片
  getAllThemeImgs(userName) {
    return axios.get(`/api/blog-setting/themeImgs/?userName=${userName}`)
  },

  // TODO:用户设置当前主题图片 
  setUserThemeImg(options) {
    return axios.post('/api/blog-setting/themeImgs', {
      ...options
    })
  }
}