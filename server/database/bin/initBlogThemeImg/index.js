const BlogThemeImg = require('../../models/BlogThemeImg')
const data = require('./systemData.json')

exports.init_blog_theme_img = async () => {
  console.log('pending: 正在初始化 BlogThemeImg 表数据...')
  // 当 BlogThemeImg 表为空时，触发初始化
  const isEmpty = await isBlogThemeImgEmpty()
  if(isEmpty) {
    await BlogThemeImg.insertMany(data.systemThemeImgList).catch(
      err => {
        console.log('失败原因: ', err.message)
        throw new Error()
      }
    )
  }
}

async function isBlogThemeImgEmpty() {
  const res = await BlogThemeImg.find()
  return res.length === 0
}