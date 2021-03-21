import * as types from '@/store/mutation-types.js';

const state = {
  developSettingHeaderType: 'themes'
}

const mutations = {
  [types.DEVELOP_SETTING_HEADER_TYPE](state, payload) {
    state.developSettingHeaderType = payload;
  }
}

export default {
  namespaced: true,
  state,
  mutations
}