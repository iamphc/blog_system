const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('global homepage');
});

// TODO:创建用户
router.post('/user/register', (req, res, next) => {
    res.send(req);
});

// TODO:用户登录验证
router.post('/user/login', (req, res, next) => {
    res.send('global user login');
});

// TODO:获取菜单（顶部+侧边）
router.get('/menusItems', (req, res, next) => {
    res.send('global top-menu/side-menu');
});

module.exports = router;