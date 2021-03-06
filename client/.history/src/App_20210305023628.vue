<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/article/view">About</router-link>
    </div>
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
 
