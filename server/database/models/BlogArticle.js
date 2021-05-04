const mongoose = require('mongoose');
const BlogArticle = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // 创建时间
    createdDate: {
        type: Date,
        required: true
    },
    // 上次更新时间
    lastUpdatedDate: {
        type: Date,
        require: true
    },
    // 用户名，作为查询索引
    userName: {
        type: String,
        required: true,
        index: true
    },
    context: {
        type: String,
        required: true
    },
    groupId: {
        type: Number
    },
    // 文章标签分类数组，作为查询索引
    tags: {
        type: [String],
        require: true,
        index: true 
    },
    // 【自增，函数实现】文章id，唯一索引
    id: {
        type: Number,
        unique: true
    }
});

module.exports = mongoose.model('BlogArticle',BlogArticle);