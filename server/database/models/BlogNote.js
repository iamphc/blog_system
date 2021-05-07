const mongoose = require('mongoose');
const BlogNote = new mongoose.Schema({
  createdTime: {
    type: Date,
    required: true
  },
  context: {
    type: String,
    required: true
  },
  // 留言者
  commenter: {
    type: String,
    default: 'visitor'
  },
  // 给谁留言（博客用户名）
  userName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('BlogNote',BlogNote);