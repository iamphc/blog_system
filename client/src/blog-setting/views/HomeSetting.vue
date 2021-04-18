<template>
  <div class="blog-setting-wrapper">
    <nav-header 
      :navTitleType="navTitleType" 
      :subHeaderMenu="subHeaderMenu"
      :isSub="true" />
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
  import BodyMenu from '@/public-components/BodyMenu'
  import ThemeSetting from '@setting/components/ThemeSetting'
  import FontSetting from '@setting/components/FontSetting'
  export default {
    components: {
      NavHeader, 
      BodyMenu,
      ThemeSetting,
      FontSetting
    },
    provide() {
      return {
        sideMenu: this.sideMenu
      }
    },
    data() {
      return {
        navTitleType: "blog-setting",
        subHeaderMenu: [
          {
            index: "themes",
            name: "主题"
          },
          {
            index: "function_area",
            name: "功能区"
          },
          {
            index: "other",
            name: "其他"
          }
        ],
        sideMenu: [
          {
            index: "ThemeSetting",
            name: "主题颜色",
            path: "blogSetting"
          },
          {
            index: "ThemeImageSetting",
            name: "主题图片",
            path: "blogSetting"
          },
          {
            index: "FontSetting",
            name: "字体设置",
            path: "blogSetting"
          },
          {
            index: "SelfSetting",
            name: "自定义编辑",
            path: "blogSetting"
          }
        ] 
      }
    },
    mounted() {},
    computed: {
      ...mapState('blogSetting', [
        'settingType'
      ])
    }
  }
</script>