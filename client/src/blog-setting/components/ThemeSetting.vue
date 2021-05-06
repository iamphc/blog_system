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
          @click="setThemeColor(theme.name)">
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
    setThemeColor(blogTheme) {
      const userName = this.getUserName()
      Api.blogSetting.setThemeColor({ userName, blogTheme }).then(
        res => {
          res.status === 'success'
            ? this.msgPrompt(res.msg + ', 颜色为: ' + res.themeName, 'success')
            : this.msgPrompt(res.msg, 'error')
        }
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
    getUserName() { 
      // state 刷新之后会被清空
      return this.$store.state.userName || localStorage.getItem('userName')
    },
    msgPrompt(message, type) {
      this.$message({ message, type })
    }
  },
}
</script>