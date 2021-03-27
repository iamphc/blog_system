const mongoose = require('mongoose');
const Users = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userPwd: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        default: 1,  // 用户类型：0（普通用户）、1（管理员）
    },
    userLoginTime: {
        type: Date
    }
});

module.exports = mongoose.model('Users',Users);