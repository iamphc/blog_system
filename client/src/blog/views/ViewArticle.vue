<template>  
  <blog-base>
    <template v-slot:section-center>
      <blog-article :articleRaw="articleRaw" /> 
    </template>
  </blog-base>
</template>   

<script>
import { Api } from "@api"
import BlogArticle from '@blog/components/BlogArticle';
import BlogBase from '@blog/components/BlogBase';
export default {
  components: {
    BlogBase,
    BlogArticle
  },
  data() {
    return {
      id: null,
      articleRaw: {}
    }
  },
  async created() { 
    await this.getArticleId() 
    console.log(this.id)
    await this.getArticleRaw()
  },
  methods: {
    getArticleId() {
      this.id = this.$route.params.id
    },
    async getArticleRaw() {
      await Api.blog.getArticle(this.id).then( 
        res => {
          res.status === 'success'
            ? this.articleRaw = res.articleRaw
            : this.handleNoArticle(res.errDetail, 'error')
        }
      )
    },
    // 处理没有找到文章的情况
    handleNoArticle(message, type) {
      this.msgPrompt(message, type)
      setTimeout(() => this.$router.push('/'), 1500)
    },
    msgPrompt(message, type) {
      this.$message({ message: message + '。正在回到主页...', type })
    }
  }
}
</script>

<style scoped>

</style>