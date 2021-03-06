import Vue from "vue";
import App from "./App.vue"; 
import router from "./blog/router";
import store from "./blog/store";
import "../public/css/main.css"; 
import {
  Container,
  Header,
  Row,
  Col,
  Button,
  Tree,
  Backtop,
  Icon
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
