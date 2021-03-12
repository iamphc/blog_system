const routes = [
  {
    path: "/admin",
    name: "adminHome",
    component: () => import("@admin/views/Homepage")
  }
]

export default routes;