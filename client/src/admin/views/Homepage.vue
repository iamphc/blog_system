<template>
  <div class="admin-home-wrapper">
    <nav-header /> 
    <body-menu>
      <!-- 右侧设置部分 -->
      <template v-slot:blog-setting-right-body>
        <component :is="rightType.admin"></component>
      </template>
    </body-menu> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavHeader from '@components/NavHeader'
import BodyMenu from '@components/BodyMenu'
import GlobalStatistic from '@admin/components/GlobalStatistic'
import RecommendedSetting from '@admin/components/RecommendedSetting'

export default {
  components: {
    NavHeader,
    BodyMenu,
    GlobalStatistic,
    RecommendedSetting
  },
  provide() {
    return {
      sideMenu: this.sideMenu,
      type: this.type
    }
  },
  created() {
    alert(this.rightType.admin)
    this.rightType.admin = this.sideMenu[0].index
  },
  data() {
    return {
      type: 'admin',
      sideMenu: [
        {
          index: 'GlobalStatistic',
          name: '总体统计'
        },
        {
          index: 'RecommendedSetting',
          name: '推荐设置'
        }
      ],
    }
  },
  computed: {
    ...mapState({
      rightType: state => state.sideMenuType
    })
  }
}
</script>