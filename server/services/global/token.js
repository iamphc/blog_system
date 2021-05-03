const User = require('../../database/models/User')
const jwt = require('jsonwebtoken')
const secret = 'b2z1_thb#'
const maxAge = 24 * 3600 * 1000 // token 24小时后过期

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

// 用户操作【非登录】时，验证jwt的token
// 问题：什么时候验证？为什么要验证？
exports.verify = async (req) => {
  const token = req.cookies['token']; // 从cookie获取token
  if (!token) {
    throw new Error('token 不存在')
  }
  const { userName, userPwd, loginTime } = await jwt.verify(token, secret)
  // 比较jwt解密的userName和req传过来的token
  if (userName !== req.body.userName) {
    throw new Error('用户名错误')
  }
  // 比较jtw解密的密码和req传过来的密码
  const isPwdCorrect = await User.countDocuments({'userName': userPwd, 'userPwd': userPwd})
  if(!isPwdCorrect) {
    throw new Error('密码错误')
  }
  // 判断token是否过期
  if(Date.now() - loginTime >= maxAge) {
    throw new Error('token 过期')
  }
}