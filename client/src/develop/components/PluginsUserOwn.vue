<template>
  <ul class="plugins-list">
    <li 
      class="plugin-item"
      v-for="(plugin, index) in enablePlugins"
      :key="index">
      <plugin 
        :showAddBtn="false"
        :showRemoveBtn="false"
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
      userName: '',
      enablePluginsNameList: [], // 用户拥有的所有插件名称列表
      enablePlugins: [],  // 用户拥有的插件列表（拥有完整参数）
      allPlugins: [],  // 所有可配置的插件
    }
  },
  async created() {
    await this.getUserEnablePlugins()
    await this.getAllPlugins()
    this.filterPlguins()
    console.log(this.enablePluginsNameList)
  },
  methods: {
    async getUserEnablePlugins() {
      const userName = this.getUserName()
      await Api.global.getPluginsUserOwn(userName).then(
        _ => this.enablePluginsNameList = _.enablePlugins
      )
    },
    getUserName() { 
      // state 刷新之后会被清空
      return this.$store.state.userName || localStorage.getItem('userName')
    },
    async getAllPlugins() {
      await Api.develop.getAllPlugins().then(
        _ => {
          if(!_.allPlugins) {
            throw new Error(_.message)
          }
          this.allPlugins = _.allPlugins
        }
      ).catch(
        _ => console.log(_.message)
      )
    },
    filterPlguins() {
      this.allPlugins.forEach(plugin => {
        if(this.enablePluginsNameList.findIndex(ele => ele === plugin.name) != -1) {
          this.enablePlugins.push(plugin)
        }
      })
      console.log('enablePlugins: ', this.enablePlugins)
    }
  }
}
</script>

<style>

</style>