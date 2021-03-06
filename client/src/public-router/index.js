const routes = [
  {
    path: "/develop",
    name: "developHome",
    component: () => import("@develop/views/Homepage")
  },
  {
    path: "/admin",
    name: "adminHome",
    component: () => import("@admin/views/Homepage")
  },
  {
    path: "/setting",
    name: "blogSettingHome",
    component: () => import("@admin/views/Homepage")
  }
]

export default routes;