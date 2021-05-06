const BlogTheme = require('../../database/models/BlogTheme')
const User = require('../../database/models/User')

// TODO:获取博客当前的主题颜色
exports.getCurrentThemeColor = async (req, res) => {
  const { userName } = req.query  
  const user = await User.findOne({ userName })  
  const blogTheme = await BlogTheme.findOne({ name: user.blogTheme })  
  
  return {
    name: blogTheme.name,
    color: blogTheme.color
  }
}