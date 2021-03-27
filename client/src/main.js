import Vue from "vue";
import App from "./App.vue"; 
import VueRouter from "vue-router";  
import BlogRouter from "@blog/router";
import DevelopRouter from "@develop/router";
import AdminRouter from "@admin/router";
import BlogSettingRouter from "@setting/router"; 
import "../public/css/main.css";
import store from '@/store';
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
  Submenu,
  Dialog,
  Form,
  Input,
  FormItem
} from 'element-ui';

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

Vue.use(Container);
Vue.use(Header);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Tree);
Vue.use(Backtop);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    ...BlogRouter,
    ...DevelopRouter,
    ...AdminRouter, 
    ...BlogSettingRouter
  ],
  mode: "history"
}) 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

