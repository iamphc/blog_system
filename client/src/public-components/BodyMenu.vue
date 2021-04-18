<template>
  <div class="body-menu-wrapper">
    <!-- 左侧菜单栏 -->
    <el-row class="blog-setting-body__left">
      <el-col :span="4" class="left-placeholder"></el-col>
      <el-col :offset="4" :span="20" class="side-menu-wrapper">
        <side-menu :sideMenu="sideMenu" />
      </el-col>
    </el-row>
    <!-- 右侧设置部分 -->
    <el-row class="blog-setting-body__center">
      <el-col :span="24" class="center-display">
        <slot name="blog-setting-right-body"></slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SideMenu from '@/public-components/SideMenu'
  export default {
    components: {
      SideMenu
    },
    props: {
      sideMenu: {
        type: Array,
        default() {
          return [
            {
              index: "ThemeSetting",
              name: "主题颜色"
            },
            {
              index: "ThemeImageSetting",
              name: "主题图片"
            },
            {
              index: "FontSetting",
              name: "字体设置"
            },
            {
              index: "SelfSetting",
              name: "自定义编辑"
            }
          ] 
        }
      } 
    },
    computed: {
      getSideMenu() {}
    }
  }
</script>