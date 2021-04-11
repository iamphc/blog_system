const User = require('../../database/models/User'); 
module.exports = async (res, { userName, userPwd } = {}) => {
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