const User = require('../database/models/User')
const bcryptjs = require('bcryptjs')
const { createUser } = require('../services/global/createUser')
const { decrypt } = require('../util/decrypt')
const { publish, verify } = require('../services/global/token')

// TODO:无
exports.homepage = (req, res, next) => {
  res.send('global homepage')
}

// TODO:创建用户
exports.register = async (req, res, next) => {
  await createUser(req).then(
    _ => res.json({
      msg: '注册成功',
      status: 'success'
    })
  ).catch(
    _ => res.json({
      msg: _.message,
      status: 'failed'
    })
  )
}

// TODO:用户登录验证
// 明文验证
exports.login = async (req, res, next) => {
  const { userName, userPwd } = req.body

  // 用户名查询
  await User.findOne({userName: userName}, {userPwd: 1})
    .then(
      query => { 
        const isUserExist = !!query
        if(!isUserExist) throw new Error('userName')  // 用户名不存在

        const isPwdCorrect = bcryptjs.compareSync(userPwd, query.userPwd)
        if(!isPwdCorrect) throw new Error('userPwd')  // 密码错误
      }
    )
    .then(
      _ => {
        publish(req, res)
          .then( _ => res.json({ msg: '登陆成功', status: 'success' }))
          .catch( _ => res.json({ msg: _.message || 'token 颁发错误', status: 'failed' }))
      }
    )
    .catch(
      _ => res.json({
        msg: _.message === 'userName' 
          ? '用户名不存在'
          : _.message === 'userPwd'
            ? '密码错误'
            : _.message,
        status: 'failed',
        errorField: _.message
      })
    ) 
}