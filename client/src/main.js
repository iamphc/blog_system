import App from "./App.vue"
import "../public/css/main.css"

import Vue from "vue"
import store from '@/store'
import VueRouter from "vue-router"

import BlogRouter from "@blog/router"
import DevelopRouter from "@develop/router"
import AdminRouter from "@admin/router"
import BlogSettingRouter from "@setting/router"
import GroupAdminRouter from "@group/router"
import SystemDetail from "@system/router"

import ElementUI from 'element-ui'  

Vue.use(VueRouter)
Vue.use(ElementUI) 

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue(); 

const router = new VueRouter({
  routes: [
    ...BlogRouter,
    ...DevelopRouter,
    ...AdminRouter, 
    ...BlogSettingRouter,
    ...GroupAdminRouter,
    ...SystemDetail
  ],
  mode: "history"
})  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

