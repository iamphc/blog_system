const express = require('express');
const router = express.Router();
const blog_setting_controller = require('../controllers/blogSettingController')

// TODO
router.get('/', blog_setting_controller.homepage)

// TODO:获取所有可配置的主题颜色
router.get('/theme', blog_setting_controller.get_all_theme_color)

// TODO:设置主题颜色
router.post('/theme', blog_setting_controller.set_theme_color)

// TODO:获取所有主题图片
router.get('/themeimgs', blog_setting_controller.get_all_theme_imgs)

// TODO:获取用户当前主题图片
router.get('/user/:id/themeimgs', blog_setting_controller.get_user_theme_img)

// TODO:用户设置当前主题图片
router.post('/themeimgs', blog_setting_controller.set_user_theme_img)

module.exports = router;