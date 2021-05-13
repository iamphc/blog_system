const routes = [
  {
    path: "/userName/:userName/develop",
    name: "developHome",
    component: () => import("@develop/views/Homepage")
  }
]

export default routes;