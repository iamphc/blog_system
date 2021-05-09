const BlogThemeImg = require('../../database/models/BlogThemeImg')

// TODO:获取所有主题图片资源地址
exports.setUserThemeImg = async (req, res) => {
  const { userName } = req.params
  const blogThemeImgs = await BlogThemeImg.find({ userName })
  const themeImgSrcList = blogThemeImgs.map(img => img.src)

  return themeImgSrcList
}

// TODO:用户设置当前主题图片资源地址
exports.getAllThemeImgs = async (req, res) => {}