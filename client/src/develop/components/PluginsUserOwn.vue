<template>
  
</template>

<script>
import { Api } from '@api'
export default {
  data() {
    return {
      enablePlugins: [] // 用户拥有的所有插件
    }
  },
  async created() {
    await this.getUserEnablePlugins()
    console.log(this.enablePlugins)
  },
  methods: {
    async getUserEnablePlugins() {
      const userName = this.getUserName()
      await Api.global.getPluginsUserOwn(userName).then(
        _ => this.enablePlugins = _.enablePlugins
      )
    },
    getUserName() { 
      // state 刷新之后会被清空
      return this.$store.state.userName || localStorage.getItem('userName')
    }
  }
}
</script>

<style>

</style>