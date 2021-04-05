import * as types from '@/store/mutation-types.js'; 

const state = {
  token: ''
}

const mutations = {
  [types.TOKEN](state, payload) {
    state.token = payload.token;
    localStorage.setItem('token', payload.token);   // 将token存到localstorage
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