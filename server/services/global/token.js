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

  let userName, userPwd, loginTime
  const path = req.path
  // TODO:登录、注册操作，以及其他游客级操作
  if(path === "/api/global/user/login" || path === "/api/global/user/register") {
    next()
  } else {
    // 从 cookie 获取 token
    const token = req.cookies['token'] 
    if(!token) {
      res.json({ msg: 'token 不存在', status: 'failed', tokenErrDetail: '无法从 cookie 中解析 token' })
    }
    // 对 token 进行签名认证
    jwt.verify(token, secret, (err, decode) => {
      if(err) {
        res.json({ msg: 'token 无效', status: 'failed', tokenErrDetail: '无效的签名' })
      }
      userName = decode.userName
      userPwd = decode.userPwd
      loginTime = decode.loginTime
    })
    await User.findOne({ userName }, { userPwd: 1 }).then(
      query => { 
        // 匹配用户名
        const isUserExist = !!query 
        if(!isUserExist) res.json({ msg: 'token 无效', status: 'failed', tokenErrDetail: '匹配不到用户名' })
        // 匹配密码
        const isPwdCorrect = bcryptjs.compareSync(userPwd, query.userPwd)
        if(!isPwdCorrect) res.json({ msg: 'token 无效', status: 'failed', tokenErrDetail: '匹配不到密码' })
      }
    ).catch( 
      _ => res.json({ msg: 'token 无效', status: 'failed', tokenErrDetail: '请排查数据库' }) 
    )
    // 检查token是否过期
    const isExpired = (Date.now() - loginTime) >= maxAge  
    if(isExpired) {
      res.json({ msg: 'token 无效', status: 'failed', tokenErrDetail: 'token 过期'}) 
    }
    next()
  }   
}