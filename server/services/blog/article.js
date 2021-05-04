const BlogArticle = require('../../database/models/BlogArticle')
// 创建文章
exports.createArticle = async (req, res, next) => {
  const { title, context, userName, createdDate, lastUpdatedDate, id } = req.body
  const blogArticle = await BlogArticle({
    id,
    title,
    context,
    userName,
    createdDate,
    lastUpdatedDate
  })
  blogArticle.save()
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