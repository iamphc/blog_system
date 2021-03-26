const mongoose = require('mongoose');
const BlogTags = new mongoose.Schema({
    tagName: {
        type: String
    }
});

module.exports = mongoose.model('BlogTags',BlogTags);