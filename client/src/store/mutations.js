import * as types from "@store/mutation-types";

export default {
  [types.USER_NAME](state, payload) {
    state.userName = payload
    localStorage.setItem('userName', payload)
  },
  [types.HEADER_TYPE](state, { blogSetting, groupAdmin } = {}) {
    // blogSetting headerType
    blogSetting
      ? state.headerType.blogSetting = blogSetting
      : ''  
    // groupAdmin headerType
    groupAdmin 
      ? state.headerType.groupAdmin = groupAdmin
      : ''
  },
  [types.SIDE_MENU_TYPE](state, { admin, blogSetting, groupAdmin, develop } = {}) {
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
    // develop sidenMenuType
    develop
      ? state.sideMenuType.develop = develop
      : ''
  }
}