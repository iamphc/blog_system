<template>
  <div class="develop-setting-wrapper">
    <nav-header 
      :navTitle="navTitle" 
      :subHeader="subHeader" />
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
        navTitle: {
          type: "blog-setting"
        },
        subHeader: {
          hasSub: true,
          menu: [{
            index: "themes",
            name: "主题"
          },{
            index: "function-area",
            name: "功能区"
          },{
            index: "other",
            name: "其他",
            menu: []
          }]
        }
      }
    }
  }
</script>