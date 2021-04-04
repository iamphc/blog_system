const User = require('../database/models/User');

// TODO:无
exports.global_homepage = (req, res, next) => {
  res.send('global homepage');
}

// TODO:创建用户
exports.global_register = async(req, res, next) => {
  const userName = req.body.userName;
  const userPwd = req.body.userPwd;

  try{
    const isExistUserName = await User.count({userName}) ? true : false;
    if(isExistUserName) {
      res.json({
        msg: '用户已注册',
        registerStatus: 'failed'
      });
      throw new Error('register failed')
    }
    const user = await User.create({
      userName,
      userPwd
    }) 
    user.save(); 
    res.json({
      msg: '注册成功',
      registerStatus: 'success'
    });
  } catch (err) {
    res.json({
      msg: '未知错误',
      registerStatus: 'failed'
    });
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