import * as types from "@store/mutation-types";

export default {
  [types.TOKEN](state, payload) {
    state.token = payload.token;
    localStorage.setItem('token', payload.token);
  },
  [types.HEADER_TYPE](state, { admin, blogSetting, groupAdmin } = {}) {
    // admin headerType
    admin
      ? state.headerType.admin = admin
      : ''
    // blogSetting headerType
    blogSetting
      ? state.headerType.blogSetting = blogSetting
      : ''  
    // groupAdmin headerType
    groupAdmin 
      ? state.headerType.groupAdmin = groupAdmin
      : ''
  },
  [types.SIDE_MENU_TYPE](state, { admin, blogSetting, groupAdmin } = {}) {
    // admin sideMenuType
    admin
      ? state.sideMenuType.admin = admin
      : ''
    // blogSetting sideMenuType
    blogSetting
      ? state.sideMenuType.blogSetting = blogSetting
      : ''  
    // groupAdmin sideMenuType
    groupAdmin 
      ? state.sideMenuType.groupAdmin = groupAdmin
      : ''
  }
}