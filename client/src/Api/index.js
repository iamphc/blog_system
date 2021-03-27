import "@Api/config"
import interceptors from "@Api/interceptors"
import admin from "@Api/admin"
import blog from "@Api/blog"
import develop from "@Api/develop"
import blogSetting from "@Api/blog-setting"
import global from "@Api/global"

export default {
  admin,
  blog,
  develop,
  blogSetting,
  global,
  interceptors
}