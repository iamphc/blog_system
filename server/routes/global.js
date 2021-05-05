const express = require('express');
const global_controller = require('../controllers/globalController');
const router = express.Router();

// TODO:无
router.get('/', global_controller.homepage);

// TODO:创建用户
router.post('/user/register', global_controller.register);

// TODO:用户登录验证
router.post('/user/login', global_controller.login);

module.exports = router;