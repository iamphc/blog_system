const BlogThemeImg = require('../../database/models/BlogThemeImg')
const User = require('../../database/models/User')

// TODO:获取用户当前主题图片
exports.getUserThemeImg = async (req, res) => {
  const { userName } = req.params 
  const { blogThemeImg } = await User.findOne({ userName }) 
  const themeImg = await BlogThemeImg.findOne({ $and: [
    { userName: { $in: [userName, 'everyone'] } },
    { name: blogThemeImg }
  ] }) 

  return themeImg
}