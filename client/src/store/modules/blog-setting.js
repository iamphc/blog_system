import * as types from '@store/mutation-types'; 

const state = {
  headerType: 'themes'
}

const mutations = {
  [types.HEADER_TYPE](state, payload) {
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