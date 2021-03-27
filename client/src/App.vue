<template>
  <div id="app">
    <user-operation/>
    <router-view />
  </div>
</template>

<script>
  import UserOperation from '@components/UserOperation';
  export default {
    components: {
      UserOperation
    }
  }
</script>
 
