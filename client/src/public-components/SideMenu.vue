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
  import * as types from '@store/mutation-types'
  import { mapState, mapMutations } from "vuex"
  export default {    
    inject: [
      'sideMenu',
      'type'
    ], 
    data() {
      return {
        activeIndex: this.sideMenu[0].index
      }
    },  
    methods: {
      ...mapMutations({
        setType: types.SIDE_MENU_TYPE
      }),
      changeSettingType(index) { 
        switch (this.type) {
          case 'admin':
            this.setType({ admin: index })
            break;
          case 'blogSetting':
            this.setType({ blogSetting: index })
            break;
          case 'groupAdmin':
            this.setType({ groupAdmin: index })
            break;
          case 'develop':
            this.setType({ develop: index })
            break;
        }
      }
    }
  }
</script>