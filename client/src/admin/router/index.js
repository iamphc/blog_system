const routes = [
  {
    path: "/userName/:userName/admin",
    name: "adminHome",
    component: () => import("@admin/views/Homepage")
  }
]

export default routes