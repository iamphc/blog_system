const mongoose = require('mongoose');
const BlogArticle = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    context: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('BlogArticle',BlogArticle);