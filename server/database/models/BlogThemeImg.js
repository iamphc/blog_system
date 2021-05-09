const mongoose = require('mongoose')

const BlogThemeImg = new mongoose.Schema({
	name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 6
  },
  // 主题图片拥有者，默认为任何人可用
  userName: {
    type: String,
    required: true,
    index: true,
    default: "everyone"
  },
  // 主题图片资源路径
  src: {
    type: String,
    required: true 
  }
})

module.exports = mongoose.model('BlogThemeImg', BlogThemeImg)