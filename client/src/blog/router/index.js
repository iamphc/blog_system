const routes = [
  {   
    path: "/",
    name: "blogHome",
    component: () => import('../views/Homepage.vue'),
  },
  {
    path: "/article/create",
    name: "createArticle",
    component: () => import("../views/CreateArticle.vue")
  },
  {
    path: "/article/:id",
    name: "viewArticle",
    component: () => import("../views/ViewArticle.vue")  
  }
];

export default routes;
