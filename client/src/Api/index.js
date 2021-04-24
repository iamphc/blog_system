import "@api/config"
import interceptors from "@api/interceptors"
import admin from "@api/admin"
import blog from "@api/blog"
import develop from "@api/develop"
import blogSetting from "@api/blog-setting"
import global from "@api/global"
import groupAdmin from "@api/group-admin"

export const Api = {
  admin,
  blog,
  develop,
  blogSetting,
  groupAdmin,
  global,
  interceptors
}