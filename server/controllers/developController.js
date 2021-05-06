const { getAllPlugins } = require('../services/develop/plugin')

// TODO:homepage
exports.homepage = (req, res, next) => {}

// TODO:获取所有可配置的插件
exports.get_all_plugins = async (req, res, next) => {
  await getAllPlugins(req, res).then(
    _ => res.json({ msg: '获取所有可配置插件成功', status: 'success', allPlugins: _ })
  ).catch(
    _ => res.json({ msg: '获取所有可配置插件失败', status: 'failed' })
  )
}

// TODO:用户添加插件
exports.user_add_plugin = (req, res, next) => {}

// TODO:用户移除插件
exports.user_remove_plugin = (req, res, next) => {}