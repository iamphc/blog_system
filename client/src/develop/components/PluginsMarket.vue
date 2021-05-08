<template> 
  <ul class="plugins-list">
    <li 
      class="plugin-item"
      v-for="(plugin, index) in plugins"
      :key="index">
      <plugin 
        :plugin="plugin"
        :userName="userName"/>
    </li>
  </ul> 
</template>

<script>
import { Api } from '@api'
import Plugin from '@develop/components/Plugin'
export default { 
  components: {
    Plugin
  },
  data() {
    return {
      plugins: [], // 所有可配置的插件列表，
      userName: ''
    }
  },
  async created() {
    await this.getPlugins() 
  },
  mounted() {
    this.userName = this.getUserName()  
  },
  methods: {
    async getPlugins() {
      await Api.develop.getAllPlugins().then(
        _ => {
          if(!_.allPlugins) {
            throw new Error(_.message)
          }
          this.plugins = _.allPlugins
        }
      ).catch(
        _ => console.log(_.message)
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