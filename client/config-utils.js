// vue-cli3 webpack 配置工具函数
const path = require("path")

module.exports = {
  resolve(dir) {
    return path.join(__dirname, dir);
  }
}
 