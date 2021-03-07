<template>
  <div class="develop-setting-wrapper">
    <nav-header :navTitle="navTitle"></nav-header>
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
      }
    }
  }
}
</script>