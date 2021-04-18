<template>
  <div class="admin-home-wrapper">
    <nav-header /> 
    <body-menu></body-menu> 
  </div>
</template>

<script>
import NavHeader from '@components/NavHeader'
import BodyMenu from '@components/BodyMenu'
export default {
  components: {
    NavHeader,
    BodyMenu
  },
  provide() {
    return {
      sideMenu: this.sideMenu
    }
  },
  data() {
    return {
      sideMenu: [
        {
          index: 'GlobalStatistic',
          name: '总体统计'
        },
        {
          index: 'RecommendedSetting',
          name: '推荐设置'
        }
      ]
    }
  }
}
</script>