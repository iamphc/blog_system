const BlogArticle = require('../../database/models/BlogArticle')
// 创建文章
exports.createArticle = async (req, res, next) => {
  const { title, context, userName, createdDate, lastUpdatedDate } = req.body
  const blogArticle = await BlogArticle({
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