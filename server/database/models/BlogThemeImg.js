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
  },
  // 主题图片描述
  describe: {
    type: String,
    required: true,
    default: '一张图片，希望你喜欢'
  },
  // 主题图片类型：系统、插件主题图片等
  themeImgType: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('BlogThemeImg', BlogThemeImg)