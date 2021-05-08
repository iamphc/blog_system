const mongoose = require('mongoose');

const BlogTag = new mongoose.Schema({
  // 标签名称，唯一索引
  name: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  createdDate: {
    type: Date,
    required: true
  },
  // 标签所属用户名（userName），索引
  userName: {
    type: String,
    required: true,
    index: true
  },
  // 标签所属文章列表（可能有多个），索引
  articleIds: {
    type: [Number],
    required: true
  }
});

module.exports = mongoose.model('BlogTag', BlogTag);