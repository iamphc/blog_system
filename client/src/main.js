import Vue from "vue";
import App from "./App.vue"; 
import VueRouter from "vue-router";  
import BlogRouter from "@blog/router";
import DevelopRouter from "@develop/router";
import AdminRouter from "@admin/router";
import BlogSettingRouter from "@setting/router"; 
import GroupAdminRouter from "@group/router";
import "../public/css/main.css";
import store from '@/store';
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue(); 

const router = new VueRouter({
  routes: [
    ...BlogRouter,
    ...DevelopRouter,
    ...AdminRouter, 
    ...BlogSettingRouter,
    ...GroupAdminRouter
  ],
  mode: "history"
})  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

