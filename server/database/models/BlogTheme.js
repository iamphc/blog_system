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
    require: true,
    unique: true
  },
  // 主体颜色，创建时间
  createdDate: {
    type: Date,
    required: true
  }, 
  // 主题色类型：自定义、系统、插件颜色等
  themeType: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('BlogTheme', BlogTheme)