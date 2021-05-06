const BlogTheme = require('../../database/models/BlogTheme')
const User = require('../../database/models/User')

// TODO:设置主题颜色
exports.setThemeColor = async (req, res) => {
  const { userName, blogTheme } = req.body   
  await User.updateOne({ userName }, { $set: { blogTheme } })
  const theme = await BlogTheme.findOne({ name: blogTheme }) 
  return theme.name
}

// TODO:获取主题颜色
exports.getThemeColor = async () => {
  return await BlogTheme.find() 
}