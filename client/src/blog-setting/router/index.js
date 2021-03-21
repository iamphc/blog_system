const routes = [ 
  {
    path: "/setting/home",
    name: "HomeSetting",
    component: () => import("@setting/views/HomeSetting")
  }
]

export default routes;