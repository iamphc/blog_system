<template>
  <div class="nav-header-wrapper">
    <!-- 主标题：博客主页相关 -->
    <el-row 
      class="main-header-content top-fixed" 
      v-show="isShowHome" 
      v-on:mouseleave.native="hideHomeHeader">
      <el-col :span="6" class="header-title-wrapper">
        <router-link to="/">
          <span class="home-title header__nowrap">{{this.blogUser + "的技术博客"}}</span>
        </router-link>
      </el-col>
      <el-col :span="3" class="header-btn-wrapper">
        <router-link to="/setting/home">
          <el-button type="primary" round>后台设置</el-button>
        </router-link>
      </el-col>
      <el-col :span="3" class="header-btn-wrapper">
        <router-link to="/admin">
          <el-button class="header-btn" type="primary" round>控制面板</el-button>
        </router-link>
      </el-col>
      <el-col :span="3" class="header-btn-wrapper">
        <router-link to="/develop">
          <el-button class="header-btn" type="primary" round>开发者模式</el-button>
        </router-link>
      </el-col>
    </el-row>
    <!-- 副标题：设置相关 -->
    <el-row 
      v-if="isShowSub"
      class="sub-header-content top-fixed">
      <el-col :span="12">
        <span class="header__nowrap sub-title">{{getNavTitle}}</span>
      </el-col>
      <el-col 
        :span="7" 
        :offset="5">
        <el-menu  
          :default-active="defaultActive"  
          mode="horizontal" 
          background-color="#545c64"
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
  import User from "@mixins/User"
  import * as types from '@store/mutation-types';
  import { mapMutations } from 'vuex'
  export default {
    inject: [
      'type'
    ],
    mixins: [User],
    data() {
      return {     
        defaultActive: "themes",
        changeShowHome: false,
        initShow: true
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
    mounted() { 
      this.setTheme()
    },
    methods: { 
      ...mapMutations({
        headerType: types.HEADER_TYPE
      }),
      showHomeHeader() {
        this.changeShowHome = true
      },
      hideHomeHeader() {
        if(this.isSub) {
          this.changeShowHome = false
        }
      },
      setTheme() {
        let wrapper = document.querySelector(".main-header-content")
        wrapper.style.backgroundColor = this.theme.backgroundColor
        wrapper.style.color = this.theme.fontColor
      },

      handleSelect(path) {
        if(!this.type) {
          this. type === 'admin'
            ? this.headerType({ admin: path })
            : this.headerType({ blogSetting: path }) 
        } 
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
        } 
        return title
      }
    }
  }
</script>