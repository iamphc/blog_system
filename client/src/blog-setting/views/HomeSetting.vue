<template>
  <div class="blog-setting-wrapper">
    <nav-header  
      :isSub="false" />
    <body-menu>
      <!-- 右侧设置部分 -->
      <template v-slot:blog-setting-right-body>
        <component :is="rightType.blogSetting"></component>
      </template>
    </body-menu>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import NavHeader from '@components/NavHeader'
  import BodyMenu from '@components/BodyMenu'
  import ThemeImageSetting from '@setting/components/ThemeImageSetting'
  import FontSetting from '@setting/components/FontSetting'
  import SelfSetting from '@setting/components/SelfSetting'
  import ThemeSetting from '@setting/components/ThemeSetting'
  export default {
    components: {
      NavHeader, 
      BodyMenu,
      ThemeSetting,
      FontSetting,
      ThemeImageSetting,
      SelfSetting
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
        type: 'blogSetting', 
        sideMenu: [
          {
            index: "ThemeSetting",
            name: "主题颜色"
          },
          {
            index: "ThemeImageSetting",
            name: "主题图片"
          },
          {
            index: "FontSetting",
            name: "字体设置"
          },
          {
            index: "SelfSetting",
            name: "自定义编辑"
          }
        ] 
      }
    },
    mounted() {},
    computed: {
      ...mapState({
        rightType: state => state.sideMenuType
      })
    }
  }
</script>