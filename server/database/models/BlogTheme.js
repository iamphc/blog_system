const mongoose = require('mongoose')

const BlogTheme = new mongoose.Schema({
  color: {
    type: String,
    required: true
  },
  // 主题颜色名称，唯一索引
  name: {
    type: String,
    trim: true,
    minLength: 1,
    maxLength: 6,
    required: true, 
  },
  // 主体颜色，创建时间
  createdDate: {
    type: Date,
    required: true
  }, 
  // 主题色类型：自定义、系统、插件颜色等
  themeType: {
    type: String,
    required: true
  },
  // 主题颜色拥有者，默认为任何人可用
  userName: {
    type: String,
    required: true,
    index: true,
    default: "everyone"
  }
})

module.exports = mongoose.model('BlogTheme', BlogTheme)