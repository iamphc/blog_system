require('./createCollection') // 连接数据库
require('./bin')  // 执行初始化数据表脚本
 
exports.UserSetting = require('./models/UserSetting')
exports.BlogArticle = require('./models/BlogArticle')
exports.BlogTheme = require('./models/BlogTheme')
exports.BlogNote = require('./models/BlogNote')
exports.BlogTag = require('./models/BlogTag')
exports.User = require('./models/User')