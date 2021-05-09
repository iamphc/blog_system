const { setThemeColor, getAllThemeColor } = require('../services/blogSetting/theme')
const { getAllThemeImgs, setUserThemeImg } = require('../services/blogSetting/themeImg')

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

// TODO:获取用户所有可配置的主题颜色
exports.get_all_theme_color = async (req, res, next) => {
  await getAllThemeColor(req, res).then(
    _ => res.json({ msg: '获取所有可配置主题颜色成功', status: 'success', themeColorList: _ })
  ).catch(
    _ => res.json({ msg: '获取所有可配置主题颜色失败', status: 'failed' })
  )
}

// TODO:获取用户所有可配置主题图片资源地址
exports.get_all_theme_imgs = async (req, res, next) => {
  await getAllThemeImgs(req, res).then(
    _ => res.json({ msg: '获取所有可配置主题图片成功', status: 'success', themeImgList: _ })
  ).catch(
    _ => res.json({ msg: '获取所有可配置主题图片失败', status: 'failed', errDetail: _.message })
  )
} 

// TODO:用户设置当前主题图片 
exports.set_user_theme_img = async (req, res, next) => {
  await setUserThemeImg(req, res).then(
    _ => res.json({ msg: '用户设置当前主题图片成功', status: 'success', themeImg: _ })
  ).catch(
    _ => res.json({ msg: '用户设置当前主题图片失败', status: 'failed', errDetail: _.message })
  )
}