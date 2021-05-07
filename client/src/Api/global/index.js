import axios from "axios"
import CryptoJS from "crypto-js"
const key = CryptoJS.enc.Utf8.parse('kaqer122s') // 密钥
const iv = CryptoJS.enc.Utf8.parse('kaqer122s') // 偏移量

export default {
  // TODO:用户注册，注册信息未加密
  userRegister(userRegisterForm) {  
    return axios.post("/api/global/user/register", {
      ...userRegisterForm
    });
  },
  // TODO:用户登录，登录信息未加密
  userLogin(userLoginForm) {
    return axios.post("/api/global/user/login", {
      ...userLoginForm
    });
  },
  // TODO:获取博客当前的主题颜色
  getCurrentThemeColor(userName) {
    return axios.get(`/api/global/theme/current/?userName=${userName}`)
  },
  // TODO:获取用户可用的所有插件
  getPluginsUserOwn(userName) {
    return axios.get(`/api/global/plugins/?userName=${userName}`)
  },
  // TODO:获取博主所有留言
  getAllNotes(userName) {
    return axios.get(`/api/global/notes/?userName=${userName}`)
  },
  // TODOl添加留言
  addNote(options) {
    return axios.post('/api/global/note/add', {
      ...options
    })
  }
}

// 加密明文
function encrypt(textPlain) {
  const parseText = CryptoJS.enc.Utf8.parse(textPlain)
  const encrypted = CryptoJS.AES.encrypt(parseText, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString()
}