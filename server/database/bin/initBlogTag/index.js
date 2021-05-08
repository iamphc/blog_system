const BlogTag = require('../../models/BlogTag')
const data = require('./systemData.json')

exports.init_blog_tag = async () => {
  console.log('pending: 正在初始初始化 BlogTag 表数据...')
  // 当 BlogTag 表为空时，触发初始化
  const isEmpty = await isBlogTagEmpty()
  if(isEmpty) {
    await addCreatedDateToList()
    await BlogTag.insertMany(data.systemTagList).catch(
      err => {
        console.log('失败原因：', err.message)
        throw new Error()
      }
    )
  }
}

async function isBlogTagEmpty() { 
  const res = await BlogTag.find()
  return res.length === 0
}

async function addCreatedDateToList() {
  const date = new Date()
  data.systemTagList.map(item => {
    item.createdDate = date
    return item
  })
}