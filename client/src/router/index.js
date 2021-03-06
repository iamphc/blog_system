import Vue from "vue";
import VueRouter from "vue-router";   

Vue.use(VueRouter);

const routes = [
  {   
    path: "/",
    name: "home",
    component: () => import('../views/blog/Blog.vue') 
  },
  {
    path: "/article/view",
    name: "viewArticle",
    component: () => import("../views/blog/ViewArticle.vue")  
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
