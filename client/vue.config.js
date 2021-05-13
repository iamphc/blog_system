const { util } = require("echarts")
const utils = require("./config-utils") 

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", utils.resolve("src"))
      .set("@admin", utils.resolve("src/admin"))
      .set("@develop", utils.resolve("src/develop"))
      .set("@blog", utils.resolve("src/blog"))
      .set("@setting", utils.resolve("src/blog-setting"))
      .set("@group", utils.resolve("src/group-admin"))
      .set("@components", utils.resolve("src/public-components"))
      .set("@router", utils.resolve("src/public-router"))
      .set("@mixins", utils.resolve("src/mixins"))
      .set("@api", utils.resolve("src/Api"))
      .set("@store", utils.resolve("src/store"))
      .set("@utils", utils.resolve("src/utils"))
      .set("@plugins", utils.resolve("src/plugins"))
      .set("public", utils.resolve("public"))
      .set("@system", utils.resolve("src/system-detail"))
  },
  // 配置代理服务器（端口）
  devServer: {
    proxy: { 
      "/api": {
        target: "http://localhost:3000"
      },
      // 特殊接口：历史上的今天
      "/todayOnhistory": {
        target: "http://v.juhe.cn",
        ws: true,
        changeOrigin: true, // 允许跨域
        secure: false,
      }
    }
  }
}

