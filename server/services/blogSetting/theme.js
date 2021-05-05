const BlogTheme = require('../../database/models/BlogTheme')

// TODO:设置主题颜色
exports.setThemeColor = async (req, res) => {
  const themeColorName = req.body.name
  
}

// TODO:获取主题颜色
exports.getThemeColor = async () => {
  return await BlogTheme.find() 
}