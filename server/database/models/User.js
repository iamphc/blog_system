const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');   // 用户注册时对密码加密

const User = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 15,
        unique: true    // 用户名字段唯一
    },
    userPwd: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 15,
        set(pwd) {
            return bcryptjs.hashSync(pwd, 10);
        }
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