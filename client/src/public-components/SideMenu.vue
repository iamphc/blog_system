<template>
  <el-menu 
    :default-active="sideMenu[0].index"  
    background-color="#545c64" 
    text-color="#fff" 
    active-text-color="#ffd04b"> 
    <el-menu-item 
      v-for="(item, index) in sideMenu"
      :key="index"
      :index="item.index">
      <i class="el-icon-menu"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item > 
  </el-menu>
</template>

<script>
  export default {  
    props: {
      sideMenu: {
        type: Array,
        default: []
      }
    }
  }
</script>