<template>
  <div class="blog-wrapper">
    <nav-header />  
    <el-row type="flex" class="blog-body" ref="blogBody">
      <!-- 插槽左部分 -->
      <div class="section-side-wrapper">
        <el-col class="blog-body-section blog-body-section__left" :span="6">
          <slot name="section-left">
            <history-today />
          </slot>
        </el-col>
      </div>
      <!-- 插槽中间部分 -->
      <el-col class="blog-body-section blog-body-section__center" :span="12">
        <slot name="section-center">
          <articles-list />
        </slot>
      </el-col>
      <!-- 插槽右部分 -->
      <div class="section-side-wrapper">
        <el-col class="blog-body-section blog-body-section__right" :span="6">
          <slot name="section-right">
            <tag-cloud />
            <notes />
          </slot>
        </el-col>
      </div>  
    </el-row> 
    <go-top />
  </div>
</template>

<script> 
import { Api } from "@api"
import GoTop from '@blog/components/GoTop'
import ArticlesList from '@blog/homepagePart/ArticlesList'
import HistoryToday from '@/blog/homepagePart/HistoryToday'
import TagCloud from '@blog/homepagePart/TagCloud'
import Notes from '@blog/homepagePart/Notes'
import NavHeader from '@components/NavHeader'
export default {
  components: {
    NavHeader,
    TagCloud,
    HistoryToday,
    ArticlesList,
    GoTop,
    Notes
  },
  provide() {
    return {
      type: this.type
    }
  },
  data() {
    return {
      type: null,
      userName: '',
      currentThemeImg: {}
    }
  },
  async mounted() {
    this.userName = this.getUserName()
    await this.getCurrentThemeImg()
  },
  methods: {
    async getCurrentThemeImg() {
      Api.global.getUserThemeImg(this.userName).then(
        res => {
          if(res.status === 'success') {
            this.currentThemeImg = res.themeImg 
            this.setBackgroundImg()
            console.log(this.currentThemeImg)
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
      this.$message({ message, type })
    },
    setBackgroundImg() {
      const dom = this.$refs.blogBody.$el 
      const imgSrc = 'url(\"http://localhost:3000/' + this.currentThemeImg.src + '\")' 
      dom.style.backgroundImage = imgSrc
    }
  }
}
</script>

<style scoped>
  
</style>