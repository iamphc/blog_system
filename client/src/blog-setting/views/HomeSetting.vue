<template>
  <div class="blog-setting-wrapper">
    <nav-header 
      :navTitleType="navTitleType" 
      :subHeaderMenu="subHeaderMenu"
      :isSub="true" />
    <body-menu />
  </div>
</template>

<script>
  import NavHeader from '@components/NavHeader';
  import BodyMenu from '@/public-components/BodyMenu';
  export default {
    components: {
      NavHeader, 
      BodyMenu
    },
    data() {
      return {
        navTitleType: "blog-setting",
        subHeaderMenu: [{
            index: "themes",
            name: "主题"
          },{
            index: "function_area",
            name: "功能区"
          },{
            index: "other",
            name: "其他"
        }]
      }
    }
  }
</script>