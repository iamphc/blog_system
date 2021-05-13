const routes = [
  {
    path: "/userName/:userName/group-admin",
    name: "groupAdminHome",
    component: () => import("@group/views/HomepageSetting")
  }
]

export default routes