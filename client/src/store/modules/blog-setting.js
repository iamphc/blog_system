import * as types from '@store/mutation-types'

const state = {
  // 顶部菜单默认为主题设置
  headerType: 'themes',
  // 侧边菜单默认为主题颜色设置
  settingType: 'ThemeSetting'
}

const mutations = {
  [types.HEADER_TYPE](state, payload) {
    state.headerType = payload
  },
  [types.SETTING_TYPE](state, payload) {
    state.settingType = payload 
  }
}

const getters = {}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}