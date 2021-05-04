const User = require('../../database/models/User')
const jwt = require('jsonwebtoken')
const secret = 'b2z1_thb#'
const maxAge = 24 * 3600 * 1000 // token 24小时后过期
const bcryptjs = require('bcryptjs')

// 【注册】颁发token
exports.publish = async (req, res) => {
  const rawInfo = {
    userName: req.body.userName,
    userPwd: req.body.userPwd,
    loginTime: Date.now() 
  }
  const jToken = await jwt.sign(rawInfo, secret, {
    expiresIn: maxAge
  })
  res.cookie('token', jToken, {
    path: '/',
    maxAge
  })
}

// TODO:全局中间件：用户操作时，验证jwt的token
exports.verify = async (req, res, next) => {
  console.log('处于全局中间件了...') 
  const path = req.path
  // TODO:登录、注册操作，以及其他游客级操作
  if(path === "/user/login" || path === "/user/register") {
    next()
  } else {
    // 从cookie获取token
    const token = req.cookies['token'] 
    if(!token) {
      throw new Error('token 不存在') 
    }
    const { userName, userPwd, loginTime } = await jwt.verify(token, secret)
    // 是否有用户
    await User.findOne({ userName }, { userPwd: 1 }).then(
      query => { 
        const isUserExist = !!query 
        if(!isUserExist) throw new Error('token 无效')
        const isPwdCorrect = bcryptjs.compareSync(userPwd, query.userPwd)
        if(!isPwdCorrect) throw new Error('token 无效')
      }
    ).catch( 
      _ => {
        throw new Error('其他错误')
      }
    )
    // token是否过期
    const isExpired = (Date.now() - loginTime) >= maxAge  
    if(isExpired) {
      throw new Error('token 过期, 请登录')
    }
    next()
  }   
}