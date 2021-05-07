const Plugin = require('../../database/models/Plugin')
const User = require('../../database/models/User')

// 获取所有可配置的插件
exports.getAllPlugins = async () => {
  return await Plugin.find()
}

// 用户添加插件
exports.userAddPlugin = async (req, res) => {
  const { userName, pluginName } = req.body 
  const user = await User.findOne({ userName })
  // 添加插件之后，可用的插件列表
  const currentPlugins = user.enablePlugins
  await User.updateOne({ userName }, { $set: { enablePlugins: [...currentPlugins, pluginName] } })
}

// 用户移除插件
exports.userRemovePlugin = async () => {}