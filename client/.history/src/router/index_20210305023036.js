import Vue from "vue";
import VueRouter from "vue-router";   

Vue.use(VueRouter);

const routes = [
  {   
    path: "/",
    name: "home",
    component: () => import('../views/Blog.vue') 
  },
  {
    path: "/article/view",
    name: "viewArticle",
    component: () => import("../views/ViewArticle.vue")  
  }
];

const router = new VueRouter({
  routes
});

export default router;
