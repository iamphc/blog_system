// setting-menu 设置菜单：顶部导航菜单、侧边导航菜单

const mongoose = require('mongoose');
const GlobalSettingMenu = new mongoose.Schema({
    menuType: {
        type: String,
        required: true,
    },
    topMenu: {
        type: Array,
        required: true
    },
    sideMenu: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('GlobalSettingMenu', GlobalSettingMenu);