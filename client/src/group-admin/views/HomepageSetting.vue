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
import SettingSEO from '@group/components/SettingSEO'
import GroupMember from '@group/components/GroupMember'
import GroupStatistic from '@group/components/GroupStatistic'
export default {
  components: {
    NavHeader,
    BodyMenu,
    SettingSEO,
    GroupMember,
    GroupStatistic
  },
  provide() {
    return {
      sideMenu: this.sideMenu,
      type: this.type
    }
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
          index: 'SettingSEO',
          name: 'SEO优化策略'
        },
        {
          index: 'GroupMember',
          name: '组成员'
        },
        {
          index: 'GroupStatistic',
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