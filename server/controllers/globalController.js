const User = require('../database/models/User');

// TODO:无
exports.global_homepage = (req, res, next) => {
  res.send('global homepage');
}

// TODO:创建用户
exports.global_register = async(req, res, next) => {
  try{
    const user = await User.create({
      userName: req.body.userName,
      userPwd: req.body.userPwd
    }) 
    const userRegisterRes = user.save();
    res.send('用户1注册成功');
  } catch (err) {
    res.send('用户注册失败')
  };
}

// TODO:用户登录验证
exports.global_login = (req, res, next) => {
  res.send('global user login');
}

// TODO:获取菜单（顶部+侧边）
exports.global_get_menu_items = (req, res, next) => {
  res.send('global top-menu/side-menu');
}