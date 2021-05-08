const User = require('../../database/models/User')
const BlogTag = require('../../database/models/BlogTag') 

// TODO:获取博客文章所属的所有标签
exports.getArticleAllTags = async (req, res) => {
  const { id } = req.params 
  const tags = await BlogTag.find({ articleIds: id })
  const tagNameList = tags.map(tag => tag.name)
  return tagNameList
}

// TODO:获取博主的所有标签
