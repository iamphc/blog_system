<template>
  <div class="edit-article_wrapper"> 
    <div 
      ref="title"
      class="article-title" 
      contenteditable="true" 
      data-placeholder="标题" />  
    <el-divider />
    <div 
      ref="context"
      class="article-maintain" 
      contenteditable="true" 
      data-placeholder="请输入正文" />
    <el-divider />
    <div class="operation-zone">
      <el-button
        class="submit-article"
        @click="submitArticle">
        上传文章
      </el-button>
    </div>
  </div>
</template>

<script>
import { Api } from "@api" 
export default {
  data() {
    return {}
  }, 
  mounted() {
    console.log(this.$store.state.userName)
  },
  methods: {
    // 提交文章
    async submitArticle() {
      const raw = this.getArticleRaw() 
      // 提交前，验证raw
      await this.validateArticleRaw(raw).then(
        _ => {
          console.log(raw)
          Api.blog.createArticle(raw).then(
            _ => {
              this.msgPrompt('上传成功', 'success')
              // 文章上传成功后，延时1.5s，回到博客首页 
              setTimeout(() => this.$router.push('/'), 1500)
            }
          ).catch(
            _ => this.msgPrompt('上传失败', 'error')
          )
        }
      ).catch(
        _ => this.msgPrompt(err.message, 'error')
      )
    },
    // 获取文章信息
    getArticleRaw() {
      return {
        title: this.$refs.title.innerText,
        context: this.$refs.context.innerText,
        createdDate: new Date(),
        userName: this.getUserName(),
        lastUpdatedDate: new Date(),
        id: new Date().getTime() % 10000000000
      }
    },
    getUserName() { 
      // state 刷新之后会被清空
      return this.$store.state.userName || localStorage.getItem('userName')
    },
    async validateArticleRaw(raw) {
      if(raw.title === '') throw new Error('标题不能为空')
      if(raw.context === '') throw new Error('文章正文不能为空')
    },
    // 用户操作信息提示框
    msgPrompt(message, type) {
      this.$message({
        message, 
        type
      })
    }
  }
}
</script>