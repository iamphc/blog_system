<template>
  <div class="plugin-item-wrapper">
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
  </div> 
</template>

<script>
import { Api } from '@api'
export default {
  props: {
    plugin: {
      type: Object
    },
    userName: {
      type: String
    },
    isDisable: {
      type: Boolean
    }
  },
  methods: {
    resolvePluginLevel(level) {
      return level === 'system'
        ? '系统插件'
        : '第三方插件'
    },
    // 添加插件后，更新可用插件
    addPlugin(pluginName) {
      const options = { userName: this.userName, pluginName }
      Api.develop.userAddPlugin(options).then(
        res => {
          if(res.status === 'success') { 
            this.msgPrompt(res.msg, 'success')
          } else {
            this.msgPrompt(res.msg, 'error')
          }
        }
      )
    },
    // 添加插件后，更新可用插件
    removePlugin(pluginName) {
      const options = { userName: this.userName, pluginName }
      Api.develop.userRemovePlugin(options).then(
        res => {
          if(res.status === 'success') { 
            this.msgPrompt(res.msg, 'success')
          } else {
            this.msgPrompt(res.msg, 'error')
          }
        }
      )
    },
    banPlugin(pluginName) {},
  }
}
</script>

<style>

</style>