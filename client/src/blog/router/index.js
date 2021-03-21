const routes = [
  {   
    path: "/",
    name: "blogHome",
    component: () => import('../views/Homepage.vue'),
  },
  {
    path: "/article/view",
    name: "viewArticle",
    component: () => import("../views/ViewArticle.vue")  
  }
];

export default routes;
