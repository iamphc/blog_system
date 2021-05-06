require('./createCollection') // 连接数据库
require('./bin')  // 执行初始化数据表脚本
  
exports.BlogArticle = require('./models/BlogArticle')
exports.BlogTheme = require('./models/BlogTheme')
exports.BlogNote = require('./models/BlogNote')
exports.BlogTag = require('./models/BlogTag')
exports.Plugin = require('./models/Plugin')
exports.User = require('./models/User')