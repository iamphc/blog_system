// 1.定义 Operation Schema
const mongoose = require('mongoose');
const addressSchema = require('./addressSchema');
const operationTypes = require('./OperationTypes');
const operationSchema = new mongoose.Schema({
  operation: {
    type: String,
    required: true,
    enum: operationTypes
  },
  time: {
    type: Date,
    default: Date.now
  },
  userid: {
    type: mongoose.Types.ObjectId,  // 外键？？？
    required: true
  },
  extraInfo: {
    type: mongoose.Schema.Types.Mixed, // 任意类型
  },
  address: {
    type: addressSchema,
    required: true
  }
});

// 2. 根据schema，导出模型 
module.exports = mongoose.model('Operation', operationSchema); 