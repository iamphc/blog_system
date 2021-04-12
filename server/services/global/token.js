const jwt = require('jsonwebtoken')
const secret = 'b2z1_thb#'
const maxAge = 24 * 3600 * 1000
// token 24小时后过期
exports.publish = async (req, res) => {
  const rawInfo = {
    name: req.body.userName,
    pwd: req.body.userPwd,
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

exports.verify = async (req, res, next) => {
  const token = req.cookie.token; // 从cookie获取token
  if(!token) {
    throw new Error('you done have any token to access the api');
  }
  try {
    // 代替jwt.decode(token)【无验证】
    const verifyResult = await jwt.verify(token, secret); 
    return verifyResult; 
  } catch {
    // TOKEN被篡改
    throw new Error('token maybe modified');
  }
}