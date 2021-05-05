const mongoose = require('mongoose')

const UserSetting = new mongoose.Schema({
  // 用户名，作为唯一索引
  userName: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  // 博客主题颜色(name)，默认为no-setting
  blogTheme: {
    type: String,
    default: 'no-setting'
  }
})

module.exports = mongoose.model('UserSetting', UserSetting)