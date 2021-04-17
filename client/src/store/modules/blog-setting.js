import * as types from '@store/mutation-types'

const state = {
  headerType: 'themes',
  settingType: 'theme'
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