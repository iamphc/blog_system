import axios from 'axios'

export default {
  getAllPlugins() {
    return axios.get('develop/plugins/all')
  }
}