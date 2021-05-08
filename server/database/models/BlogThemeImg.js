const mongoose = require('mongoose')

const BlogThemeImg = new mongoose.Schema({
	name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    index: true
  },
  // 主题图片资源路径
  src: {
    type: String,
    required: true 
  }
})

module.exports = mongoose.model('BlogThemeImg', BlogThemeImg)