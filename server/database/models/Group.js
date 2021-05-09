const mongoose = require('mongoose')

const Group = new mongoose.Schema({
	name: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true,
  },
  members: {
    type: [String],
    required: true
  },
  // 管理员用户名（name）
  admin: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Group', Group)