<template>
  <div class="blog-setting-wrapper">
    <nav-header 
      :navTitleType="navTitleType" 
      :subHeaderMenu="subHeaderMenu"
      :isSub="true" />
    <el-row class="blog-setting-body">
      <el-col :span="1" class="left-placeholder"></el-col>
      <el-col :offset="1" :span="3" class="side-menu-wrapper">
        <side-menu :sideMenu="sideMenu"/>
      </el-col>
      <el-col :span="20"></el-col>
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
          index: ""
        }] 
      }
    }
  }
</script>