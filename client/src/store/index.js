import Vue from 'vue';
import Vuex from 'vuex';

import store from "@/store/store";
import getters from "@/store/getters";
import actions from "@/store/actions";
import mutations from "@/store/mutations";

import blogSetting from '@/store/modules/blog-setting.js';
import global from '@/store/modules/global';

Vue.use(Vuex);

export default new Vuex.Store({
  store,
  getters,
  actions,
  mutations,
  modules: {
    blogSetting,
    global
  }
});