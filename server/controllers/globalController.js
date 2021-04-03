const User = require('../database/models/User');

// TODO:无
exports.global_homepage = (req, res, next) => {
  res.send('global homepage');
}

// TODO:创建用户
exports.global_register = async(req, res, next) => {
  const user = await User.create({
    userName: req.body.userName,
    userPwd: req.body.userPwd
  })
  const dataSaveRes = user.save();
  res.send(dataSaveRes);
}

// TODO:用户登录验证
exports.global_login = (req, res, next) => {
  res.send('global user login');
}

// TODO:获取菜单（顶部+侧边）
exports.global_get_menu_items = (req, res, next) => {
  res.send('global top-menu/side-menu');
}