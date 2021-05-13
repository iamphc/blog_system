<template>
  <div class="nav-header-wrapper">
    <!-- 主标题：博客主页相关 -->
    <el-row 
      ref="wrapper"
      class="main-header-content top-fixed" 
      v-show="isShowHome" 
      v-on:mouseleave.native="hideHomeHeader">
      <el-col :span="6" class="header-title-wrapper">
        <router-link :to="{ name: 'blogHome', params: { userName: currentUserName } }">
          <span class="home-title header__nowrap">{{this.blogUser + "的技术博客"}}</span>
        </router-link>
      </el-col>
      <el-col v-if="isLogin" :span="3" class="header-btn-wrapper">
        <router-link :to="{ name: 'settingHome', params: { userName: currentUserName } }">
          <el-button type="primary" round>后台设置</el-button>
        </router-link>
      </el-col>
      <el-col v-if="isLogin" :span="3" class="header-btn-wrapper">
        <router-link :to="{ name: 'adminHome', params: { userName: currentUserName } }">
          <el-button class="header-btn" type="primary" round>控制面板</el-button>
        </router-link>
      </el-col>
      <el-col v-if="isLogin" :span="3" class="header-btn-wrapper">
        <router-link :to="{ name: 'developHome', params: { userName: currentUserName } }">
          <el-button class="header-btn" type="primary" round>开发者模式</el-button>
        </router-link>
      </el-col>
      <el-col v-if="isLogin" :span="3" class="header-btn-wrapper dropdown-wrapper">
        <el-dropdown>
          <span class="header-dropdown-text__other">
            其他
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown"> 
            <el-dropdown-item class="dropdown-item">
              <router-link :to="{ name: 'groupAdminHome', params: { userName: currentUserName } }" ref="dropdownItemGroup">
                组设置
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item class="dropdown-item">
              <router-link to="/system-detail" ref="dropdownItemSystem">
                系统说明
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item class="dropdown-item">
              <span 
                ref="dropdownItemExist"
                @click="exist">
                退出
              </span>
            </el-dropdown-item>
          </el-dropdown-menu> 
        </el-dropdown> 
      </el-col>
      <span 
        v-if="!isLogin"
        class="login-reigster-btn header-btn-wrapper dropdown-wrapper"
        @click="loginOrRegister">
        登录/注册
      </span>
    </el-row>
    <!-- 副标题：设置相关 -->
    <el-row 
      ref="subWrapper"
      v-if="isShowSub"
      class="sub-header-content top-fixed">
      <el-col :span="12">
        <span class="header__nowrap sub-title">{{getNavTitle}}</span>
      </el-col>
      <el-col 
        :span="7" 
        :offset="5">
        <el-menu  
          :default-active="subHeaderMenu[0].index"  
          mode="horizontal" 
          :background-color="themeColor"
          text-color="#fff" 
          @select="handleSelect"
          active-text-color="#ffd04b">
          <el-menu-item 
            class="sub-header-item" 
            v-for="(item, index) in subHeaderMenu" 
            :key="index"
            :index="item.index">
              {{item.name}}
            <!-- 有子菜单 -->
            <el-submenu v-if="item.menu">
              <template slot="title">{{item.name}}</template>
              <el-menu-item 
                v-for="(subItem, subIndex) in item.menu" 
                :key="subIndex" 
                index="subItem.index">
                {{subItem.name}}
              </el-menu-item>
            </el-submenu>
          </el-menu-item>
        </el-menu>
      </el-col>
      <div 
        class="show-auto" 
        v-on:mouseover="showHomeHeader"></div>
    </el-row>
  </div>
</template>

<script>   
import { Api } from "@api"
import User from "@mixins/User"
import UserOperation from "@mixins/UserOperation"
import * as types from '@store/mutation-types'
import { mapMutations } from 'vuex'
export default {
  inject: [
    'type'
  ],
  mixins: [User, UserOperation], 
  data() {
    return {      
      changeShowHome: false,
      initShow: true,
      themeColor: null,
      isLogin: false,  // 是否已经是登录状态了
      currentUserName: ''
    }
  },
  props: {
    navTitleType: {
      type: String,
      default: "blog" 
    },
    theme: {
      type: Object,
      default () {
        return {
          backgroundColor: "#7868e6",
          fontColor: "#fff"
        }
      }
    },
    subHeaderMenu: {
      type: Array,
      default () {
        return [] // 最多两层 
      }
    },
    isSub: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.isLogin = this.getToken().token !== ''
    this.currentUserName = this.$route.params.userName
    console.log(this.currentUserName)
  },
  async mounted() {  
    await this.getSettingTheme() 
    await this.setNavHeaderTheme()
    if(this.isLogin) {
      await this.setBlocksTheme()
    }
  },
  methods: { 
    ...mapMutations({
      headerType: types.HEADER_TYPE,
      userOperation: types.USER_OPERATION
    }),
    showHomeHeader() {
      this.changeShowHome = true
    },
    hideHomeHeader() {
      if(this.isSub) {
        this.changeShowHome = false
      }
    },
    // 设置顶部导航颜色
    setNavHeaderTheme() {
      let wrapper = this.$refs.wrapper.$el   
      wrapper.style.backgroundColor =  this.themeColor || this.theme.backgroundColor
      wrapper.style.color = this.theme.fontColor
    },
    // 设置顶部导航的其他下拉menu颜色
    setBlocksTheme() { 
      let group = this.$refs.dropdownItemGroup.$el
      let system = this.$refs.dropdownItemSystem.$el
      let exist = this.$refs.dropdownItemExist
      group.style.color = this.themeColor || this.themeColor.backgroundColor
      system.style.color = this.themeColor || this.themeColor.backgroundColor
      exist.style.color = this.themeColor || this.themeColor.backgroundColor
    },
    handleSelect(path) { 
      console.log('select')
      switch (this.type) {
        case 'admin':
          this.headerType({ admin: path })
          break;
        case 'blogSetting':
          this.headerType({ blogSetting: path })
          break;
        case 'groupAdmin':
          this.headerType({ groupAdmin: path })
          break;
      }
    },
    async getSettingTheme() {
      const userName = this.getUserName() 
      await Api.global.getCurrentThemeColor(userName).then(
        _ => this.themeColor = `#${_.color}`
      )
    },
    getUserName() { 
      // state 刷新之后会被清空
      return this.$store.state.userName || localStorage.getItem('userName')
    },
    // 用户点击登录或者注册
    loginOrRegister() {
      console.log('123')
      this.userOperation({
        userOperation: true
      })
    },
    // 退出登录
    exist() { 
      // 删除cookie中的token字段，实现退出登录
      document.cookie = `token=; expires=${new Date() - 1000}; path=/; domain=localhost;`
      location.reload()
    }
  },
  computed: {
    isShowHome() {
      if(this.changeShowHome) {
        this.initShow = false
      }
      if(!this.isSub) {
        return true;
      }
      if(this.initShow) {
        return false;
      } else {
        return this.changeShowHome;
      }
    },
    isShowSub() {
      return this.subHeaderMenu.length;
    },
    getNavTitle() {
      let title = ""
      switch (this.navTitleType) { 
        case "blog-setting":
          title = "博客页面设置"
          break;
        case "admin":
          title = "后台统计"
          break;
        case "develop":
          title = "开发者模式"
          break;
        case "group-admin":
          title = "组管理"
          break;
      } 
      return title
    }
  }
}
</script>