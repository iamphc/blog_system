<template>
  <div class="group-admin-wrapper">
    <nav-header 
      :navTitleType="navTitleType"
      :subHeaderMenu="subHeaderMenu"
      :isSub="true"/>
    <body-menu>
      <!-- 右侧设置部分 -->
      <template v-slot:blog-setting-right-body>
        <component :is="rightType.groupAdmin"></component>
      </template>
    </body-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavHeader from '@components/NavHeader'
import BodyMenu from '@components/BodyMenu'
import SEOSetting from '@group/components/SEOSetting'
import Member from '@group/components/Member'
import Statistic from '@group/components/Statistic'
export default {
  components: {
    NavHeader,
    BodyMenu,
    SEOSetting,
    Member,
    Statistic
  },
  provide() {
    return {
      sideMenu: this.sideMenu,
      type: this.type
    }
  },
  created() {  
    this.rightType.groupAdmin = this.sideMenu[0].index
  },
  data() {
    return {
      type: 'groupAdmin',
      navTitleType: 'group-admin',
      subHeaderMenu: [
        {
          index: 'basic-setting',
          name: '基本设置'
        },
        {
          index: 'extension-setting',
          name: '扩展设置'
        }
      ],
      sideMenu: [
        {
          index: 'SEOSetting',
          name: 'SEO优化策略'
        },
        {
          index: 'Member',
          name: '组成员'
        },
        {
          index: 'Statistic',
          name: '组数据统计'
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