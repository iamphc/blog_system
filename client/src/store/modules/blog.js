import * as types from '@store/mutation-types'

const state = {
  // 选中的文章标签
  articleSelectedTags: []
}

const mutations = {
  [types.ARTICLE_SELECTED_TAGS](state, { articleSelectedTags }) {
    state.articleSelectedTags = articleSelectedTags
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