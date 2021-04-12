const User = require('../../database/models/User'); 
module.exports = async req => {
  const userName = req.body.userName
  const userPwd = req.body.userPwd 
  
  const isExistUserName = await User.countDocuments({userName}) ? true : false;
  if(isExistUserName) {
    throw new Error('用户已注册')
  }

  const user = await User.create({
    userName,
    userPwd
  }) 
  user.save()
}