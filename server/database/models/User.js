const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs') // 用户注册时对密码加密 

const User = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 15,
		trim: true,
		unique: true, // 用户名字段唯一  
	},
	userPwd: {
		type: String,
		required: true,
		set(pwd) {
			const salt = bcryptjs.genSaltSync(10) // 生成加密盐
			return bcryptjs.hashSync(pwd, salt)
		},
		select: false // 不查询该字段
	},
	userType: {
		type: [Number],
		default: [0], // 用户类型：0（普通用户）、1（组成员）、2（组管理员）
	},
	userLoginTime: {
		type: Date
	}, 
	// 博客主题颜色(name)，默认为no-setting
	blogTheme: {
		type: String,
		default: 'no-setting'
	},
	// 用户可用插件(plugin-name)，默认为空
	enablePlugins: {
		type: [String],
		default: []
	}
})

module.exports = mongoose.model('User', User)