const BlogArticle = require('../../database/models/BlogArticle')
const BlogTag = require('../../database/models/BlogTag') 

// TODO:获取博客文章所属的所有标签
exports.getArticleAllTags = async (req, res) => {
  const { id } = req.params 
  const article = await BlogArticle.findOne({ id }) 

  return article.tags
}

// TODO:获取博主的所有标签
exports.getUserAllTags = async (req, res) => {
  const { userName } = req.query
  const tags = await BlogTag.find({ userName })
  const tagNameList = tags.map(tag => tag.name)
  
  return tagNameList
}