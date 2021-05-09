const BlogTheme = require('../../database/models/BlogTheme')
const User = require('../../database/models/User')

// TODO:设置主题颜色
exports.setThemeColor = async (req, res) => {
  const { userName, blogTheme } = req.body   
  await User.updateOne({ userName }, { $set: { blogTheme } })
  const theme = await BlogTheme.findOne({ name: blogTheme }) 
  return theme.name
}

// TODO:获取所有可配置的主题颜色
exports.getAllThemeColor = async (req, res) => {
  const { userName } = req.params
  return await BlogTheme.find({ userName: { $in: [userName, 'everyone'] } }) 
}