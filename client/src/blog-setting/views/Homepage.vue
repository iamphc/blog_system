<template>
  <div class="blog-setting-wrapper">
    <nav-header 
      :navTitleType="navTitleType" 
      :subHeaderMenu="subHeaderMenu"
      :isSub="true" />
    <el-row class="blog-setting-body__left">
      <el-col :span="8" class="left-placeholder"></el-col>
      <el-col :offset="8" :span="16" class="side-menu-wrapper">
        <side-menu :sideMenu="sideMenu"/>
      </el-col> 
    </el-row>
    <el-row class="blog-setting-body__center">
      <el-col :span="24" class="center-display"></el-col>
    </el-row>
  </div>
</template>

<script>
  import NavHeader from '@components/NavHeader';
  import SideMenu from '@/public-components/SideMenu';
  export default {
    components: {
      NavHeader,
      SideMenu
    },
    data() {
      return {
        navTitleType: "blog-setting",
        subHeaderMenu: [{
            index: "themes",
            name: "主题"
          },{
            index: "function-area",
            name: "功能区"
          },{
            index: "other",
            name: "其他"
        }],
        sideMenu: [{
          index: "theme-color",
          name: "主题颜色"
        },{
          index: "theme-image",
          name: "主题图片"
        },{
          index: "self-edit",
          name: "自定义编辑"
        }] 
      }
    }
  }
</script>