import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/store/state"
import getters from "@/store/getters"
import actions from "@/store/actions"
import mutations from "@/store/mutations"

import admin from '@/store/modules/admin'                 // admin
import blogSetting from '@/store/modules/blog-setting.js' // blog-setting

Vue.use(Vuex); 

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    admin, 
    blogSetting
  }
});