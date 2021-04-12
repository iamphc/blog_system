const User = require('../database/models/User'); 
const createUser = require('../services/global/createUser');
const { 
  publish,
  verify
 } = require('../services/global/token');

// TODO:无
exports.global_homepage = (req, res, next) => {
  res.send('global homepage');
}

// TODO:创建用户
exports.global_register = async (req, res, next) => {
  await createUser(req).then(
    _ => res.json({
      msg: '注册成功',
      status: 'success'
    })
  ).catch(
    _ => res.json({
      msg: _.message,
      status: 'failed'
    })
  )
}

// TODO:用户登录验证
exports.global_login = (req, res, next) => {
  res.send('global user login');
}

// TODO:获取菜单（顶部+侧边）
exports.global_get_menu_items = (req, res, next) => {
  res.send('global top-menu/side-menu');
}