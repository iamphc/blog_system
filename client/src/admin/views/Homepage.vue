<template>
  <div class="admin-home-wrapper">
    <nav-header /> 
    <body-menu>
      <!-- 右侧设置部分 -->
      <template v-slot:blog-setting-right-body>
        <component :is="settingType"></component>
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
      sideMenu: this.sideMenu
    }
  },
  data() {
    return {
      sideMenu: [
        {
          index: 'GlobalStatistic',
          name: '总体统计',
          path: "admin"
        },
        {
          index: 'RecommendedSetting',
          name: '推荐设置',
          path: "admin"
        }
      ],
    }
  },
  computed: {
    ...mapState('admin', [
      'settingType'
    ])
  }
}
</script>