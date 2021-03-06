const utils = require("./config-utils") 

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@admin", utils.resolve("src/admin"))
      .set("@develop", utils.resolve("src/develop"))
      .set("@blog", utils.resolve("src/blog"))
  }
}

