const routes = [ 
  {
    path: "/userName/:userName/setting",
    name: "settingHome",
    component: () => import("@setting/views/Homepage")
  }
]

export default routes