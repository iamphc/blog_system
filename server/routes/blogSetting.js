const express = require('express');
const router = express.Router();
const blogSetting = require('../controllers/blogSettingController')

// TODO
router.get('/', blogSetting.homepage)

// TODO:获取所有可配置的主题颜色
router.get('/theme', blogSetting.get_theme_color)

// TODO:设置主题颜色
router.post('/theme', blogSetting.set_theme_color)

module.exports = router;