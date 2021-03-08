<template>
  <div class="nav-header-wrapper">
    <!-- 主标题 -->
    <el-row 
      class="main-header-content"
      :class="{'hide-auto': subHeader.hasSub}">
      <el-col :span="6" class="header-title-wrapper">
        <router-link to="/">
          <span>{{getNavTitle}}</span>
        </router-link>
      </el-col>
      <el-col :span="3" class="header-btn-wrapper">
        <router-link to="/setting">
          <el-button type="primary" round>后台设置</el-button>
        </router-link>
      </el-col>
      <el-col :span="3" class="header-btn-wrapper">
        <router-link to="/admin">
          <el-button type="primary" round>控制面板</el-button>
        </router-link>
      </el-col>
      <el-col :span="3" class="header-btn-wrapper">
        <router-link to="/develop">
          <el-button type="primary" round>开发者模式</el-button>
        </router-link>
      </el-col>
    </el-row>
    <!-- 副标题 -->
    <el-menu 
      class="sub-header-content" 
      v-if="subHeader.hasSub"
      :default-active="activeIndex2" 
      mode="horizontal"  
      background-color="#545c64" 
      text-color="#fff" 
      active-text-color="#ffd04b">
      <el-menu-item 
        v-for="(item, index) in subHeader.menu" :key="index">
        <!-- 有子菜单 -->
        <el-submenu v-if="item.menu" index="item.index">
          <template slot="title">{{item.name}}</template>
          <el-menu-item 
            v-for="(subItem, subIndex) in item.menu" 
            :key="subIndex"
            index="subItem.index">{{subItem.name}}</el-menu-item>
        </el-submenu>
        <!-- 无子菜单 -->
        <el-menu-item v-else index="item.index">{{item.name}}</el-menu-item>
      </el-menu-item>
      <!-- <el-menu-item index="theme">主题</el-menu-item>
      <el-menu-item index="function-area">功能区</el-menu-item>
      <el-submenu index="other">
        <template slot="title">其他</template>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex2: "1"
      }
    },
    props: {
      navTitle: {
        type: Object,
        default () {
          return {
            type: "blog",
            name: "Lvanzn"
          }
        },
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
      subHeader: {
        type: Object,
        default() {
          return {
            hasSub: false,
            menu: []  // 最多两层
          }
        }
      }
    },
    mounted() {
      this.setTheme()
    },
    methods: {
      setTheme() {
        let wrapper = document.querySelector(".main-header-content")
        wrapper.style.backgroundColor = this.theme.backgroundColor
        wrapper.style.color = this.theme.fontColor
      }
    },
    computed: {
      getNavTitle() {
        let title = ""
        switch (this.navTitle.type) {
          case "blog":
            title = this.navTitle.name + "的技术博客"
            break;
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