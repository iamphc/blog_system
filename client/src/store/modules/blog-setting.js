import * as types from '@/store/mutation-types.js'; 

const state = {
  headerType: 'themes'
}

const mutations = {
  [types.SET_DEVELOP_SETTING_HEADER_TYPE](state, payload) {
    state.headerType = payload;
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