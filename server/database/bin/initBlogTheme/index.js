const BlogTheme = require('../../models/BlogTheme')
const data = require('./systemData.json') 

exports.init_blog_theme = async () => {
  console.log('pending: 正在初始化 BlogTheme 表数据...')
  // 当表为空时，触发初始化 
  const isEmpty = await isBlogThemeEmpty()
  if(isEmpty) { 
    await addCreatedDateToList() 
    await BlogTheme.insertMany(data.themeList).catch( 
      err => { 
        console.log('失败原因: ', err.message)
        throw new Error() 
      }
    )
  }
}
 

async function isBlogThemeEmpty() {
  const res = await BlogTheme.find() 
  return res.length === 0
} 

async function addCreatedDateToList() {
  const date = new Date()
  data.themeList.map(item => {
    item.createdDate = date 
    return item
  })
}