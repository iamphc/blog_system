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
      @click="changeSettingType(item.index, item.path)">
      <i class="el-icon-menu"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item > 
  </el-menu>
</template>

<script>  
  import { SETTING_TYPE } from "@store/mutation-types"
  import { mapState, mapMutations } from "vuex"
  export default {    
    props: {
      sideMenu: {
        type: Array,
        default: []
      }
    },  
    computed: {
      ...mapState('blogSetting', {
        activeIndex: 'settingType'
      })
    },
    methods: {
      ...mapMutations({
        blogSettingType: state => state.blogSetting.SETTING_TYPE,
        adminSettingType: state => state.admin.SETTING_TYPE
      }),
      ...mapMutations(),
      changeSettingType(index, path) {
        alert(`index:${index},path:${path}`) 
        path === 'admin'
          ? this.blogSettingType(index)
          : this.adminSettingType(index) 
      }
    }
  }
</script>