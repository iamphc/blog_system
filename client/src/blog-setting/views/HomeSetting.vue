<template>
  <div class="blog-setting-wrapper">
    <nav-header 
      :navTitleType="navTitleType" 
      :subHeaderMenu="subHeaderMenu"
      :isSub="true" />
    <body-menu>
      <!-- 右侧设置部分 -->
      <template v-slot:blog-setting-right-body>
        <component :is="changeSetting"></component>
      </template>
    </body-menu>
  </div>
</template>

<script>
  import NavHeader from '@components/NavHeader';
  import BodyMenu from '@/public-components/BodyMenu';
  import ThemeSetting from '@setting/components/ThemeSetting';
  import FontSetting from '@setting/components/FontSetting';
  export default {
    components: {
      NavHeader, 
      BodyMenu,
      ThemeSetting,
      FontSetting
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
        settingPart: 'ThemeSetting'
      }
    },
    computed: {
      changeSetting() {
        return this.settingPart
      }
    }
  }
</script>