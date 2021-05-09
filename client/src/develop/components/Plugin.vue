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
        v-if="showAddBtn"
        class="add" 
        type="success" 
        size="small"
        :disabled="changeDisabled"
        @click="addPlugin(plugin.name)">
        添加
      </el-button>
      <el-button 
        v-if="showRemoveBtn"
        class="remove" 
        type="danger" 
        size="small"
        :disabled="!changeDisabled"
        @click="removePlugin(plugin.name)">
        移除
      </el-button>
      <el-button 
        class="ban"
        type="info" 
        size="small">
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
    // 插件一开始是否可用
    originDisabled: { 
      type: Boolean
    },
    showAddBtn: {
      type: Boolean,
      default: true
    },
    showRemoveBtn: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      changeDisabled: false
    }
  },
  created() {
    this.changeDisabled = this.originDisabled 
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
            this.triggerBtnDisable()
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
            this.triggerBtnDisable()
          } else {
            this.msgPrompt(res.msg, 'error')
          }
        }
      )
    },
    msgPrompt(message, type) {
      this.$message({ message, type })
    },
    // 切换按钮（添加、移除）禁用
    triggerBtnDisable() {
      this.changeDisabled = !this.changeDisabled
    }
  }
}
</script>

<style>

</style>