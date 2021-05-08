const { setThemeColor, getAllThemeColor } = require('../services/blogSetting/theme')

// TODO
exports.homepage = (req, res, next) => {
  res.send('blog setting homepage')
}

// TODO:设置主题颜色
exports.set_theme_color = async (req, res, next) => {
  await setThemeColor(req, res).then(
    _ => res.json({ msg: '设置主题颜色成功', status: 'success', themeName: _ })
  ).catch(
    _ => res.json({ msg: '设置主题颜色失败', status: 'failed' })
  )
}

// TODO:获取所有可配置的主题颜色
exports.get_all_theme_color = async (req, res, next) => {
  await getAllThemeColor().then(
    _ => res.json({ msg: '获取所有可配置主题颜色成功', status: 'success', themeColorList: _ })
  ).catch(
    _ => res.json({ msg: '获取所有可配置主题颜色失败', status: 'failed' })
  )
}

// TODO:获取所有主题图片
exports.get_all_theme_imgs = (req, res, next) => {}

// TODO:获取用户当前主题图片
exports.get_user_theme_img = (req, res, next) => {}

// TODO:用户设置当前主题图片
exports.set_user_theme_img = (req, res, next) => {}