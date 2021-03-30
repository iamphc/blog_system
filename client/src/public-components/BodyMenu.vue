<template>
  <div class="body-menu-wrapper">
    <el-row class="blog-setting-body__left">
      <el-col :span="4" class="left-placeholder"></el-col>
      <el-col :offset="4" :span="20" class="side-menu-wrapper">
        <side-menu :sideMenu="sideMenu" />
      </el-col>
    </el-row>
    <el-row class="blog-setting-body__center">
      <el-col :span="24" class="center-display"></el-col>
    </el-row>
  </div>
</template>

<script>
  import * as types from '@/store/mutation-types'
  import { mapMutations } from 'vuex'
  import SideMenu from '@/public-components/SideMenu'
  export default {
    props: {
      sideMenu: {
        type: Array,
        default() {
          return [{
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
    },
    components: {
      SideMenu
    },
    methods: {
      ...mapMutations('blogSetting',{
        headerType: types.SET_DEVELOP_SETTING_HEADER_TYPE
      })
    },
    computed: {
      getSideMenu() {}
    }
  }
</script>