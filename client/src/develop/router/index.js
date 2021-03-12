const routes = [
  {
    path: "/develop",
    name: "developHome",
    component: () => import("@develop/views/Homepage")
  }
]

export default routes;