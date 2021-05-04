<template>
  <div class="articles-wrapper">
    <div class="placeholder">
      <span class="articles-type-title">
        {{articleType}}
        <router-link class="article-create" to="/article/create">写文章</router-link>
      </span>
    </div>
    <div class="bottom-line"></div>
    <ul class="articles-list"> 
      <li 
        class="article-item"
        v-for="(article, index) in articlesList"
        :key="index">
        <h2 class="article-title">{{ article.title }}</h2>
        <div class="article-update-detailes">
          <span class="article-upload-time">{{ article.createdDate }}</span>
        </div>
        <div class="article-abstract">
          {{ article.context }}
          <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li> 
    </ul>
  </div>
</template>

<script> 
import { Api } from "@api"
export default {
  data() {
    return {
      articlesList: []
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
  },
  methods: {
    async getArticlesList() {
      await Api.blog.getArticlesList().then(
        _ => this.articlesList = _.articlesList    
      ).catch(
        _ => this.$message({ message: _.message, type: 'error' })
      )
    }
  }
}
</script>

<style scoped> 
</style>