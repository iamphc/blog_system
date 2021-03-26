// 1、定义User Schema
const mongoose = require("mongoose");
const addressSchema = require('./addressSchema');
const userSchema = new mongoose.Schema({
  loginId: {
    // mongoose带来的验证，而非mongodb
    type: String, // 类型是字符串 
    required: true,  // 必填
    trim: true,  // 去掉首尾空格
    minlenght: 6,
    maxlength: 18,
    // 非验证项
    index: true, // 将该字段设置为索引：用来提高查询速度
    unique: true  // 特殊索引，唯一索引
  },
  loginPwd: {
    // mongoose带来的验证，而非mongodb
    type: String, // 类型是字符串 
    required: true,  // 必填
    trim: true,  // 去掉首尾空格 

    select: false // 默认情况下，查询用户时，不会查询该字段
  },
  name: {
    // mongoose带来的验证，而非mongodb
    type: String, // 类型是字符串 
    required: true,  // 必填
    trim: true,  // 去掉首尾空格
    minlenght: 2,
    maxlength: 10,
  },
  loves: {
    type: [String], // 类型为字符串数组 
    default: [], // 默认为一个空数组   
  },
  address: {
    type: addressSchema,
    required: true,
    // _id: false
  },
  age: {
    type: Number, 
    default: 10
  }
}
,{
  versionKey: false,
  // validateBeforeSave: false
}
); 

// 2、通过User Schema定义模型，最终导出模型
module.exports = mongoose.model('User', userSchema); 