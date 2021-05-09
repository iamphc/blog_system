require('./createCollection') // 连接数据库
require('./bin')  // 执行初始化数据表脚本
  
exports.BlogDataStatistic = require('./models/BlogDataStatistic')
exports.BlogThemeImg = require('./models/BlogThemeImg')
exports.BlogArticle = require('./models/BlogArticle')
exports.BlogTheme = require('./models/BlogTheme')
exports.BlogFont = require('./models/BlogFont')
exports.BlogNote = require('./models/BlogNote')
exports.BlogTag = require('./models/BlogTag')
exports.Plugin = require('./models/Plugin')
exports.Group = require('./models/Group')
exports.User = require('./models/User')