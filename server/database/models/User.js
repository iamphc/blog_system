const mongoose = require('mongoose');
const User = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 15
    },
    userPwd: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 15
    },
    userType: {
        type: Number,
        default: 1,  // 用户类型：0（普通用户）、1（管理员）
    },
    userLoginTime: {
        type: Date
    }
});

module.exports = mongoose.model('User',User);