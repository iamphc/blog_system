<template> 
  <ul class="plugins-list">
    <li   
      class="plugin-item"
      v-for="(plugin, index) in plugins"
      :key="index">
      <div class="plugin-cover"> 
        <img class="cover" :src="require(`../../${plugin.coverUrl}`)"> 
      </div>
      <div class="plugin-info">
        <span class="plugin-name">名称：{{ plugin.name }}</span>
        <span class="plugin-level">来源：{{ resolvePluginLevel(plugin.level) }}</span>
        <span class="plugin-describe">描述：{{ plugin.describe }}</span>
      </div>
      <div class="plugin-operation">
        <el-button 
          class="add" 
          type="success" 
          size="small"
          @click="addPlugin(plugin.name)">
          添加
        </el-button>
        <el-button 
          class="remove" 
          type="danger" 
          size="small"
          @click="removePlugin(plugin.name)">
          移除
        </el-button>
        <el-button 
          class="ban"
          type="info" 
          size="small"
          @click="banPlugin(plugin.name)">
          禁用
        </el-button>
      </div>
    </li>
  </ul> 
</template>

<script>
import { Api } from '@api'
export default { 
  data() {
    return {
      plugins: [], // 所有可配置的插件，
      userName: ''
    }
  },
  async created() {
    await this.getPlugins()
    console.log(this.plugins)
  },
  mounted() {
    this.userName = this.getUserName()
    console.log(this.userName)
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
    resolvePluginLevel(level) {
      return level === 'system'
        ? '系统插件'
        : '第三方插件'
    },
    addPlugin(pluginName) {
      const options = { userName: this.userName, pluginName }
      Api.develop.userAddPlugin(options).then(
        res => {
          res.status === 'success'
            ? this.msgPrompt(res.msg, 'success')
            : this.msgPrompt(res.msg, 'error')
        }
      )
    },
    removePlugin(pluginName) {},
    banPlugin(pluginName) {},
    msgPrompt(message, type) {
      this.$message({ message, type })
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