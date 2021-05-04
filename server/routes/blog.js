const express = require('express');
const router = express.Router();
const blog_controller = require('../controllers/blogController')

router.get('/', blog_controller.homepage)

// TODO:获取留言板
router.get('/notes', blog_controller.get_notes)

// TODO:获取标签云
router.get('/tagsCloud', blog_controller.get_tags_cloud)

// TODO:获取文章列表
router.get('/articles', blog_controller.get_articles_list)

// TODO:获取文章
router.get('/article/:id', blog_controller.get_article)

// TODO:写文章
router.post('/article/create', blog_controller.article_create)

module.exports = router
