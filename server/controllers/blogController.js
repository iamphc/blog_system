const { createArticle, getArticleList } = require('../services/blog/article')

exports.homepage = (req, res, next) => {
  res.send('blog homepage')
}

// TODO:获取留言板
exports.get_notes = (req, res, next) => {
  res.send('blog homepage notes')
}

// TODO:获取标签云
exports.get_tags_cloud = (req, res, next) => {
  res.send('blog homepage tagsCloud')
}

// TODO:获取文章列表
exports.get_articles_list = async (req, res, next) => {
  await getArticleList(req, res).then(
    _ => res.json({ msg: '获取文章列表成功', status: 'success', articlesList: _  }) 
  ).catch(
    _ => res.json({ msg: '获取文章列表失败', status: 'failed' })
  )
}

// TODO:获取文章
exports.get_article = async (req, res, next) => { 
  res.send('article: id')
}

// TODO:写文章
exports.article_create = async (req, res, next) => {
  await createArticle(req, res).then(
    _ => res.json({ msg: '上传成功', status: 'success' })
  ).catch(
    _ => res.json({ msg: '上传失败', status: 'failed' })
  )
}