<template>
  <el-menu 
    class="side-menu"
    :default-active="activeIndex"  
    background-color="#545c64" 
    text-color="#fff" 
    active-text-color="#ffd04b"> 
    <el-menu-item 
      class="side-menu-item"
      v-for="(item, index) in sideMenu"
      :key="index"
      :index="item.index"
      @click="changeSettingType(item.index)">
      <i class="el-icon-menu"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item > 
  </el-menu>
</template>

<script>  
  import * as types from "@store/mutation-types"
  import { mapMutations } from "vuex"
  export default {  
    data() {
      return {
        activeIndex: ''
      }
    },
    props: {
      sideMenu: {
        type: Array,
        default: []
      }
    },
    created() {
      this.activeIndex = this.sideMenu[0].index
    },
    methods: {
      ...mapMutations('blogSetting', {
        settingType: types.SETTING_TYPE
      }),
      changeSettingType(index) {
        alert(index)
        this.settingType(index) 
      }
    }
  }
</script>