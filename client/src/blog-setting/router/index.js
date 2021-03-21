const routes = [
  {
    path: "/setting/themes",
    name: "themes",
    component: () => import("@setting/views/Themes")
  },
  {
    path: "/setting/function_area",
    name: "functionArea",
    component: () => import("@setting/views/FunctionArea")
  },
  {
    path: "/setting/Other",
    name: "Other",
    component: () => import("@setting/views/Other")
  }
]

export default routes;