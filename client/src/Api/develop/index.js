import axios from 'axios'

export default {
  getAllPlugins() {
    return axios.get('/develop/plugins/all')
  },
  userAddPlugin(options) {
    return axios.post('/develop/plugin/user/add', {
      ...options
    })
  }
}