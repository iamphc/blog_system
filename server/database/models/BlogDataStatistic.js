const mongoose = require('mongoose')

const BlogDataStatistic = new mongoose.Schema({
	// 被统计的用户名
  userName: {
    type: String,
    required: true
  },
  // 博客访问次数
  blogVisits: {
    type: Number,
    default: 0
  },
  // 文章浏览次数
  articlesVisits: {
    type: [{
      artilceId: String,
      visits: Number
    }],
    default: []
  },
  // 最近访问时间
  lastVisitDate: {
    type: Date
  }
})

module.exports = mongoose.model('BlogDataStatistic', BlogDataStatistic)