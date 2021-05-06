const express = require('express')
const router = express.Router()
const develop_controller = require('../controllers/developController')

// homepage
router.get('/', develop_controller.homepage)

// TODO:获取所有可配置的插件
router.get('/plugins/all', develop_controller.get_all_plugins)

// TODO:用户添加插件
router.post('/plugin/user/add', develop_controller.user_add_plugin)

// TODO:用户移除插件
router.post('/plugin/user/remove', develop_controller.user_remove_plugin)

module.exports = router;