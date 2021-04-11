const jwt = require('jsonwebtoken')

exports.publish = function (info = {}, expiresIn = 1000 * 3600 * 24) {
  return jwt.sign(info, secret, {
    expiresIn
  });
}

exports.verify = function (req) {
  const token = req.body.token;
  // TOKEN不存在
  if(!token) {
    throw new Error('token not exist!');
  }
  try {
    // 代替jwt.decode(token)【无验证】
    const verifyResult = jwt.verify(token, secret); 
    return verifyResult; 
  } catch {
    // TOKEN被篡改
    throw new Error('token maybe modified');
  }
}