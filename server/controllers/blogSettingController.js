const { setThemeColor, getThemeColor } = require('../services/blogSetting/theme')

// TODO
exports.homepage = (req, res, next) => {
  res.send('blog setting homepage')
}

// TODO:设置主题颜色
exports.set_theme_color = async (req, res, next) => {
  await setThemeColor().then(
    _ => res.json({ msg: '设置主题颜色成功', status: 'success', themeColor: _ })
  ).catch(
    _ => res.json({ msg: '设置主题颜色失败', status: 'failed' })
  )
}

// TODO:获取主题颜色
exports.get_theme_color = async (req, res, next) => {
  await getThemeColor().then(
    _ => res.json({ msg: '获取主题颜色成功', status: 'success', themeColorList: _ })
  ).catch(
    _ => res.json({ msg: '获取主题颜色失败', status: 'failed' })
  )
}