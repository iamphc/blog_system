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
  return currentPlugins
}

// 用户移除插件
exports.userRemovePlugin = async (req, res) => {
  const { userName, pluginName } = req.body
  const user = await User.findOne({ userName })
  // 移除插件之后，可用的插件列表
  let currentPlugins = user.enablePlugins
  console.log('before: ', currentPlugins)
  let index = currentPlugins.indexOf(pluginName)
  currentPlugins = currentPlugins.splice(index, 1)
  console.log(index)
  console.log('after: ', currentPlugins)
  await User.updateOne({ userName }, { $set: { enablePlugins: currentPlugins } })
  return currentPlugins
}