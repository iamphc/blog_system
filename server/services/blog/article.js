const BlogArticle = require('../../database/models/BlogArticle')
const BlogTag = require('../../database/models/BlogTag')
// 创建文章
exports.createArticle = async (req, res, next) => {
  const { title, context, userName, createdDate, lastUpdatedDate, id, tags } = req.body
  const blogArticle = await BlogArticle({
    id,
    title,
    context,
    userName,
    createdDate,
    lastUpdatedDate,
    tags
  })

  blogArticle.save()
  
  // 用户所有的标签
  const currentTags = await BlogTag.find({ userName })
  // 文章所有的标签数量
  const articleTagsNum = tags.length
  // 标记为新增的标签
  const markNewTag = [] 

  // 创建新建的标签, 给每个标签添加新的文章 id
  tags.forEach((tag, index) => {
    markNewTag[index] = currentTags.findIndex(el => el.name === tag) === -1
  })

  for(let i = 0; i < articleTagsNum; ++ i) {
    const name = tags[i]
    const articleIds = [id]
    if(markNewTag[i]) { 
      const blogTag = await BlogTag.create({
        name,
        createdDate,
        userName,
        articleIds
      })
      blogTag.save()
    } else {
      await BlogTag.updateOne({userName, name }, { $push: { articleIds: id } })
    }
  } 
}

// 获取文章列表
exports.getArticleList = async (req, res) => {
  const articles = await BlogArticle.find()  
  return articles
}

exports.getArticle = async (req, res) => {
  const { id } = req.params; 
  const raw = await BlogArticle.find({ id })  
  if(!raw.length)
    throw new Error('没有这篇文章')
  return raw[0]
}