<template>
  <div class="system-detail-wrapper">
    <nav-header :isSub="false" />
    <body-menu>
      <!-- 右侧设置部分 -->
      <template v-slot:blog-setting-right-body>
        <component :is="rightType.systemDetail"></component>
      </template>
    </body-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavHeader from '@components/NavHeader'
import BodyMenu from '@components/BodyMenu'
import CollectionList from '@system/components/CollectionList'
import InterfaceList from '@system/components/InterfaceList'
export default {
  components: {
    NavHeader,
    BodyMenu,
    CollectionList,
    InterfaceList
  },
  provide() {
    return {
      sideMenu: this.sideMenu,
      type: this.type
    }
  },
  created() {  
    this.rightType.blogSetting = this.sideMenu[0].index
  },
  data() {
    return {
      navTitleType: 'systemDetail',
      type: 'systemDetail',
      sideMenu: [
        {
          index: 'CollectionList',
          name: 'MongoDB Collection列表'
        },
        {
          index: 'InterfaceList',
          name: 'Express接口列表'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      rightType: state => state.sideMenuType
    })
  }
}
</script>

<style>

</style>