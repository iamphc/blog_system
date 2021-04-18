import Vue from 'vue'
import Vuex from 'vuex'

import store from "@/store/store"
import getters from "@/store/getters"
import actions from "@/store/actions"
import mutations from "@/store/mutations"

import admin from '@/store/modules/admin'                 // admin
import blogSetting from '@/store/modules/blog-setting.js' // blog-setting

Vue.use(Vuex);

export default new Vuex.Store({
  store,
  getters,
  actions,
  mutations,
  modules: {
    admin,
    blogSetting
  }
});