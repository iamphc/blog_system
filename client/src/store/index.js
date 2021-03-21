import Vue from 'vue';
import Vuex from 'vuex';
import blogSetting from '@/store/modules/blog-setting.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    blogSetting
  }
});