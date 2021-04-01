const mongoose = require('mongoose');
const BlogTag = new mongoose.Schema({
    tagName: {
        type: String
    }
});

module.exports = mongoose.model('BlogTag',BlogTag);