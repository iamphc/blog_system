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
    userName: {
        type: String,
        required: true
    },
    context: {
        type: String,
        required: true
    },
    groupId: {
        type: Number
    },
    // 文章标签分类数组，作为索引
    tags: {
        type: [String],
        require: true,
        index: true 
    }
});

module.exports = mongoose.model('BlogArticle',BlogArticle);