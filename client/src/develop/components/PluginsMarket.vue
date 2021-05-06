<template>
  
</template>

<script>
import { Api } from '@api'
export default {
  data() {
    return {
      plugins: [] // 所有可配置的插件
    }
  },
  async created() {
    await this.getPlugins()
    console.log(this.plugins)
  },
  methods: {
    async getPlugins() {
      await Api.develop.getAllPlugins().then(
        _ => this.plugins = _.allPlugins
      )
    }
  }
}
</script>

<style>

</style>