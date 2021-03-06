<template>
  <div id="app">
    <blog />
    <router-view />
  </div>
</template>

<script> 
import Blog from '@/views/Blog';
export default {
  components: {
    Blog
  }
}
</script>
 
