const mongoose = require('mongoose')

const Plugin = new mongoose.Schema({
  // 插件名称：唯一索引
  name: {
    type: String,
    required: true,
    unique: true,
    index: true 
  },
  // 插件级别：默认为第三方
  level: {
    type: String,
    default: 'third part'
  },
  // 插件描述，描述功能
  describe: {
    type: String,
    required: true
  },
  // 插件作用的地方：blog、blogSetting、admin、groupAdmin、develop
  target: {
    type: String,
    required: true
  },
  // 插件封面url地址，默认图片地址为
  coverUrl: {
    type: String,
    default: "public/imgs/pluginDefaultCover.jpeg"
  }
})

module.exports = mongoose.model('Plugin', Plugin)