const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('blog homepage');
});

// TODO:获取博客主页目录
router.get('/menu', (req, res, next) => {
    req.send('blog homepage menu');
});

// TODO:获取留言板
router.get('/notes', (req, res, next) => {
    req.send('blog homepage notes');
});

// TODO:获取标签云
router.get('/tagsCloud', (req, res, next) => {
    req.send('blog homepage tagsCloud');
});

// TODO:获取文章列表
router.get('/articles', (req, res, next) => {
    res.send('articles list');
});

// TODO:获取文章
router.get('/article/:articleId', (req, res, next) => {
    res.send(req.params);
});

module.exports = router;
