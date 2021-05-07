const User = require('../../database/models/User')

// 获取用户拥有的所有插件
exports.getPluginsUserOwn = async (req, res) => {
  const { userName } = req.query 
  const user = await User.findOne({ userName })
  return user.enablePlugins
}