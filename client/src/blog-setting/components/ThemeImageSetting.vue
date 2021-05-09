<template>
  <ul class="theme-imgs-list">
    <li 
      class="theme-img-item"
      v-for="(themeImg, index) in themeImgList"
      :key="index">
      <div class="theme-img__wrapper">
        <img class="mini-img" :src="themeImg.src">
      </div>
      <div class="theme-img-info">
        <span class="theme-img-name">图片名称：{{ themeImg.name }}</span>
        <span class="theme-img-describe">图片描述：{{ themeImg.describe }}</span>
        <span class="theme-img-level">图片来源：{{ resolveLevel(themeImg.userName) }}</span>
      </div>
      <div class="theme-img__operation">
        <el-button 
          class="theme-img-set"
          type="success">
          设置
        </el-button>
      </div>
    </li>
  </ul>
</template>

<script>
import { Api } from "@api" 
export default {
  data() {
    return {
      themeImgList: [],
      userName: ''
    }
  }, 
  async mounted() {
    this.userName = this.getUserName()
    await this.getAllThemeImgList() 
  },
  methods: {
    // 获取用户可配置的所有主题图片
    async getAllThemeImgList() {
      Api.blogSetting.getAllThemeImgs(this.userName).then(
        res => {
          if(res.status === 'success') {
            this.themeImgList = res.themeImgList
            this.resolveThemeImg()
            this.msgPrompt(res.msg, 'success')
            console.log(this.themeImgList)
          } else {
            this.msgPrompt(res.msg, 'error')
          }
        }
      )
    },
    getUserName() { 
      // state 刷新之后会被清空
      return this.$store.state.userName || localStorage.getItem('userName')
    },
    msgPrompt(message, type) {
      this.$message(message, type)
    },
    // 对获取到的主题图片列表做二次转换
    resolveThemeImg() {
      this.themeImgList = this.themeImgList.map(img => {
        // 处理 Src
        img.src = `http://localhost:3000/${img.src}`
        // 添加用户操作按钮属性
        img.enableBtn = true
        return img
      })
    },
    // 对图片来源进行解析
    resolveLevel(userName) {
      return userName === 'everyone' ? '默认' : '你'
    }
  }
}
</script>