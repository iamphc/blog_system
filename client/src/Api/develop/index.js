import axios from 'axios'

export default {
  // 获取所有可配置的插件
  getAllPlugins() {
    return axios.get('/api/develop/plugins/all')
  },
  // 用户添加插件
  userAddPlugin(options) {
    return axios.post('/api/develop/plugin/user/add', {
      ...options
    })
  },
  // 用户移除插件
  userRemovePlugin(options) {
    return axios.post('/api/develop/plugin/user/remove', {
      ...options
    })
  }
}