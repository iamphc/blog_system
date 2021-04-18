import * as types from '@store/mutation-types'

const state = {
  // 侧边菜单默认为总体统计
  settingType: 'GlobalStatistic'
}

const mutations = {
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