const routes = [
  {
    path: "/setting",
    name: "blogSettingHome",
    component: () => import("@setting/views/Homepage")
  }
]

export default routes;