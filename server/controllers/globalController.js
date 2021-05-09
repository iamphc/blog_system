const User = require('../database/models/User')
const bcryptjs = require('bcryptjs')
const { createUser } = require('../services/global/createUser')
const { decrypt } = require('../util/decrypt')
const { publish, verify } = require('../services/global/token')
const { getCurrentThemeColor } = require('../services/global/theme')
const { getPluginsUserOwn } = require('../services/global/userPlugins')
const { getAllNotes, addNote } = require('../services/global/notes')
const { getUserThemeImg } = require('../services/global/themeImg')

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

// TODO:获取博客当前的主题颜色 
exports.get_current_theme_color = async (req, res, next) => {
  await getCurrentThemeColor(req, res).then(
    _ => res.json({ msg: '获取当前主题颜色成功', status: 'success', name: _.name, color: _.color })
  ).catch(
    _ => res.json({ msg: '获取当前主题颜色失败', status: 'failed', errDetail: _.message })
  )
}

// TODO:获取用户可用的所有插件
exports.get_plugins_user_own = async (req, res, next) => {
  await getPluginsUserOwn(req, res).then(
    _ => res.json({ msg: '获取用户拥有的所有插件成功', status: 'success', enablePlugins: _ })
  ).catch(
    _ => res.json({ msg: '获取用户拥有的所有插件失败', status: 'failed', errDetaiil: _.message })
  )
}

// TODO:获取所有留言
exports.get_all_notes = async (req, res, next) => {
  await getAllNotes(req, res).then(
    _ => res.json({ msg: '获取所有留言成功', status: 'success', notes: _ })
  ).catch(
    _ => res.json({ msg: '获取所有留言失败', status: 'failed' })
  )
}

// TODO:添加留言
exports.add_note = async (req, res, next) => {
  await addNote(req, res).then(
    _ => res.json({ msg: '添加留言成功', status: 'success', context: _ })
  ).catch(
    _ => res.json({ msg: '添加留言失败', status: 'failed', errDetail: _.message })
  )
}

// TODO:获取用户当前主题图片
exports.get_user_theme_img = async (req, res, next) => {
  await getUserThemeImg(req, res).then(
    _ => res.json({ msg: '获取用户当前主题图片成功', status: 'success', themeImg: _ })
  ).catch(
    _ => res.json({ msg: '获取用户当前主题图片失败', status: 'failed', errDetail: _.message })
  )
}