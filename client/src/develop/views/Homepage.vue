<template>
  <div class="develop-home-wrapper">
    <nav-header :navTitleType="navTitleType" />
    <body-menu>
      <!-- 右侧设置部分 -->
      <template v-slot:blog-setting-right-body>
        <component :is="rightType.develop"></component>
      </template>
    </body-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavHeader from '@components/NavHeader'
import BodyMenu from '@components/BodyMenu'
import PluginsMarket from '@develop/components/PluginsMarket'
import PluginCreate from '@develop/components/PluginCreate' 
import PluginsUserOwn from '@develop/components/PluginsUserOwn'
export default {
  components: {
    NavHeader,
    BodyMenu,
    PluginsMarket,
    PluginCreate,
    PluginsUserOwn
  },
  provide() {
    return {
      sideMenu: this.sideMenu,
      type: this.type
    }
  },
  data() {
    return {
      navTitleType: 'develop',
      type: 'develop',
      sideMenu: [
        {
          index: 'PluginsMarket',
          name: '插件市场'
        },
        {
          index: 'PluginsUserOwn',
          name: '我的插件'
        },
        {
          index: 'PluginCreate',
          name: '自定义插件'
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