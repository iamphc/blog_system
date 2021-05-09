const mongoose = require('mongoose');

const BlogFont = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  userName: {
    type: String,
    required: true,
    default: "everyone",
    index: true
  },
  // 博客字体资源路径
  src: {
    type: String,
    required: true
  },
  createdDate: {
    type: String,
    required: true
  },
  // 字体描述
  describe: {
    type: String,
    default: "默认字体"
  },
  // 字体类型：系统、插件字体等
  fontType: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('BlogFont', BlogFont)