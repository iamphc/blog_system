<template>
  <div class="articles-wrapper">
    <div class="placeholder">
      <span class="articles-type-title">
        {{articleType}}
        <router-link class="article-create" :to="{ name: 'createArticle', params: { userName: currentUserName } }">写文章</router-link>
      </span>
    </div>
    <div class="bottom-line"></div>
    <ul class="articles-list"> 
      <li 
        class="article-item"
        v-for="article in articlesList"
        :key="article.id">
        <h2 class="article-title">{{ article.title }}</h2>
        <div class="article-update-detailes">
          <span class="article-upload-time">{{ article.createdDate }}</span>
        </div>
        <div class="article-abstract">
          {{ article.context }}
        </div>
        <router-link class="get-full-article" :to="getViewArticleRouter(article.id)">阅读全文>></router-link>
      </li> 
    </ul>
  </div>
</template>

<script> 
import { Api } from "@api"
export default {
  data() {
    return {
      articlesList: [],
      currentUserName: ''
    }
  },
  props: {
    articleType: {
      type: String,
      default: "默认分类"
    }
  },
  async created() { 
    // 初始化文章列表
    this.articlesList = []
    await this.getArticlesList()  
    console.log(this.articlesList)
    this.currentUserName = this.$route.params.userName
  },
  methods: {
    async getArticlesList() {
      await Api.blog.getArticlesList().then(
        res => {
          res.status === 'success' 
            ? this.articlesList = res.articlesList  
            : this.msgPrompt(res.msg, 'error')
        }
      ).catch(
        err => this.msgPrompt(err.message, 'error')
      )
    },
    getViewArticleRouter(id) {
      return {
        name: 'viewArticle',
        params: { id }
      }
    },
    msgPrompt(message, type) {
      this.$message({ message, type })
    }
  }
}
</script>

<style scoped> 
</style>