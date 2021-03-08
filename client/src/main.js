import Vue from "vue";
import App from "./App.vue"; 
import VueRouter from "vue-router";  
import BlogRouter from "@blog/router";
import DevelopRouter from "@develop/router";
import AdminRouter from "@admin/router";
import BlogSettingRouter from "@setting/router";
import PublicRouter from "@router";
import store from "@blog/store";
import "../public/css/main.css"; 
import {
  Container,
  Header,
  Row,
  Col,
  Button,
  Tree,
  Backtop,
  Icon,
  Menu,
  MenuItem,
  Submenu
} from 'element-ui';

Vue.config.productionTip = false;

Vue.use(Container);
Vue.use(Header);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Tree);
Vue.use(Backtop);
Vue.use(Icon);
Vue.use(VueRouter);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);

const router = new VueRouter({
  routes: [
    ...BlogRouter,
    ...DevelopRouter,
    ...AdminRouter,
    ...PublicRouter,
    ...BlogSettingRouter
  ],
  mode: "history"
}) 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
