const Plugin = require('../../database/models/Plugin')

// 获取所有可配置的插件
exports.getAllPlugins = async (req, res) => {
  return await Plugin.find()
}