<template>
  <div class="develop-setting-wrapper">
    <nav-header 
      :navTitleType="navTitleType" 
      :subHeaderMenu="subHeaderMenu"
      :isSub="true" />
  </div>
</template>

<script>
  import NavHeader from '@components/NavHeader';
  export default {
    components: {
      NavHeader
    },
    data() {
      return {
        navTitleType: "blog-setting",
        subHeaderMenu: [{
            index: "themes",
            name: "主题"
          },{
            index: "function-area",
            name: "功能区"
          },{
            index: "other",
            name: "其他"
        }] 
      }
    }
  }
</script>