const express = require('express');
const global_controller = require('../controllers/globalController');
const router = express.Router();

// TODO:无
router.get('/', global_controller.homepage);

// TODO:创建用户
router.post('/user/register', global_controller.register);

// TODO:用户登录验证
router.post('/user/login', global_controller.login);

// TODO:获取博客当前的主题颜色（query：username）
router.get('/theme/current', global_controller.get_current_theme_color)

// TODO:获取用户可用的所有插件
router.get('/plugins', global_controller.get_plugins_user_own)

module.exports = router;