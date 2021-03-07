<template>
  <div class="develop-home-wrapper">
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
        type: "develop"
      }
    }
  }
}
</script>