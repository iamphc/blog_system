const mongoose = require('mongoose');
const BlogHomepageMenu = new mongoose.Schema({
    menuList: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('BlogHomepageMenu',BlogHomepageMenu);