const express = require('express');
const global_controller = require('../controllers/globalController');
const router = express.Router();

// TODO:无
router.get('/', global_controller.homepage);

// TODO:创建用户
router.post('/user/register', global_controller.register);

// TODO:用户登录验证
router.post('/user/login', global_controller.login);

// TODO:获取菜单（顶部+侧边）
router.get('/menusItems', global_controller.get_menu_items);

module.exports = router;