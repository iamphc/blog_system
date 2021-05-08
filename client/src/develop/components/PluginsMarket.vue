<template> 
  <ul class="plugins-list">
    <li 
      class="plugin-item"
      v-for="(plugin, index) in plugins"
      :key="index">
      <plugin 
        :plugin="plugin"
        :userName="userName"
        :originDisabled="plugin.originDisabled"/>
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
      userName: '',
      enablePluginNameList: []  // 用户可用的插件名称列表
    }
  }, 
  async mounted() {
    this.userName = this.getUserName()  
    await this.getUserEnablePlugins() 
    await this.getPlugins() 
  },
  methods: {
    async getPlugins() {
      await Api.develop.getAllPlugins().then(
        _ => {
          if(!_.allPlugins) {
            throw new Error(_.message)
          }
          this.plugins = _.allPlugins 
          this.addOriginDisabledToPlugins()
        }
      ).catch(
        _ => console.log(_.message)
      )
    }, 
    async getUserEnablePlugins() { 
      console.log('userName', this.userName)
      await Api.global.getPluginsUserOwn(this.userName).then(
        _ => {
          this.enablePluginNameList = _.enablePlugins
        }
      )
    },
    getUserName() { 
      // state 刷新之后会被清空
      return this.$store.state.userName || localStorage.getItem('userName')
    },
    addOriginDisabledToPlugins() { 
      this.plugins = this.plugins.map(plugin => {
        const isPluginEnable = this.enablePluginNameList.findIndex(el => el === plugin.name) !== -1
        plugin.originDisabled = isPluginEnable ? true : false
        return plugin
      })
    }
  }
}
</script>

<style>

</style>