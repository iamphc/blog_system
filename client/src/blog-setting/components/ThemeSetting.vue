<template>
  <el-row 
    class="theme-pick-wrapper" 
    type="flex">
    <el-col
      class="theme-color-item"
      :span="6"
      v-for="theme in themeColorList"
      :key="theme.index"
      ref="pickCol">
        <el-button 
          circle
          class="theme-circle"
          @click="selectThemeColor(theme.name)">
        </el-button>
        <span class="theme-name">{{theme.name}}</span>
    </el-col>
  </el-row>
</template>

<script>
import { Api } from "@api"
export default {
  data() {
    return {
      themeColorList: []
    }
  },
  async created() { 
    await this.getAllThemeColor()  
    this.setButtonThemes()
  }, 
  methods: {
    selectThemeColor(name) {
      Api.blogSetting.setThemeColor(name).then(
        // _ => this.themeColorList = _.themeColorList
      )
    },
    async getAllThemeColor() {
      await Api.blogSetting.getThemeColor().then(
        _ => this.themeColorList = _.themeColorList
      )
    },
    msgPrompt(message, type) {
      this.$message({ message, type })
    },
    // 设置按钮的颜色
    setButtonThemes() {
      this.$refs.pickCol.forEach((col, index) => {
        col.$children[0].$el.style.backgroundColor = `#${this.themeColorList[index].color}`
      })
    },
  }
}
</script>