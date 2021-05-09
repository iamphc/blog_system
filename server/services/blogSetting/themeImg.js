const User = require('../../database/models/User')
const BlogThemeImg = require('../../database/models/BlogThemeImg')
const BlogTheme = require('../../database/models/BlogTheme')

// TODO:获取用户所有可配置主题图片资源地址
exports.getAllThemeImgs = async (req, res) => {
  const { userName } = req.params
  const blogThemeImgs = await BlogThemeImg.find({ userName: { $in: [userName, 'everyone'] } })

  return blogThemeImgs
}

// TODO:用户设置当前主题图片
exports.setUserThemeImg = async (req, res) => {
  const { userName, blogThemeImg } = req.body
  await User.updateOne({ userName }, { $set: { blogThemeImg } })

  return await BlogThemeImg.findOne({ userName, BlogThemeImg })
}