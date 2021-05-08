const { createArticle, getArticleList, getArticle } = require('../services/blog/article')
const { getArticleAllTags, getUserAllTags } = require('../services/blog/tags')

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
  await getArticle(req, res).then(
    _ => res.json({ msg: '获取文章成功', status: 'success', articleRaw: _ })
  ).catch(
    _ => res.json({ msg: '获取文章失败', status: 'failed' , errDetail: _.message})
  )
}

// TODO:写文章
exports.article_create = async (req, res, next) => {
  await createArticle(req, res).then(
    _ => res.json({ msg: '上传成功', status: 'success' })
  ).catch(
    _ => res.json({ msg: '上传失败', status: 'failed' })
  )
}

// TODO:获取博客文章所属的所有标签
exports.get_article_all_tags = async (req, res, next) => {
  await getArticleAllTags(req, res).then(
    _ => res.json({ msg: '获取文章标签成功', status: 'success', tags: _ })
  ).catch(
    _ => res.json({ msg: '获取文章标签失败', status: 'failed', errDetail: _.message })
  )
}

// TODO:获取博主的所有标签
exports.get_user_all_tags = async (req, res, next) => {
  await getUserAllTags(req, res).then(
    _ => res.json({ msg: '获取博主所有标签成功', status: 'success', tags: _ })
  ).catch(
    _ => res.json({ msg: '获取博主所有标签失败', status: 'failed', errDetail: _.message })
  )
}