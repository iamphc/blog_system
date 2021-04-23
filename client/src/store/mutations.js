import * as types from "@store/mutation-types";

export default {
  [types.TOKEN](state, payload) {
    state.token = payload.token;
    localStorage.setItem('token', payload.token);
  },
  [types.HEADER_TYPE](state, { admin, blogSetting } = {}) {
    // admin headerType
    admin
      ? state.headerType.admin = admin
      : ''
    // blogSetting headerType
    blogSetting
      ? state.headerType.blogSetting = blogSetting
      : ''  
  },
  [types.SIDE_MENU_TYPE](state, { admin, blogSetting } = {}) {
    // admin sideMenuType
    admin
      ? state.sideMenuType.admin = admin
      : ''
    // blogSetting sideMenuType
    blogSetting
      ? state.sideMenuType.blogSetting = blogSetting
      : ''  
  }
}