const mongoose = require('mongoose');

const BlogTag = new mongoose.Schema({
  // 标签名称和所属用户，唯一索引
  name: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  },
  // 标签所属用户名（userName)
  userName: {
    type: String,
    required: true
  },
  // 标签所属文章列表（可能有多个）
  articleIds: {
    type: [Number],
    required: true
  }
});

module.exports = mongoose.model('BlogTag', BlogTag);