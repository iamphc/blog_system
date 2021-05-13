const routes = [
  {   
    path: "/userName/:userName",
    name: "blogHome",
    component: () => import('../views/Homepage.vue'),
  },
  {
    path: "/userName/:userName/article/create",
    name: "createArticle",
    component: () => import("../views/CreateArticle.vue")
  },
  {
    path: "/userName/:userName/article/:id",
    name: "viewArticle",
    component: () => import("../views/ViewArticle.vue")  
  }
];

export default routes;
