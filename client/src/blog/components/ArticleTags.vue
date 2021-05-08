<template>
  <el-row class="article-tags-wrapper">
    <h3 class="article-tags-title">文章标签</h3>
    <el-divider />
    <div class="tag-list-wrapper">
      <el-tag 
        class="article-tag"
        v-for="(tag, index) in articleTags"
        :key="index">
        {{tag}}
      </el-tag>
      <span 
        class="tips"
        v-if="!articleTags.length">
        这篇文章没有标签
      </span>
    </div>
  </el-row>
</template>

<script>
import { Api } from "@api"
export default {
  data() {
    return {
      articleId: null,
      articleTags: [] // 文章的所属标签
    }
  },
  async created() {
    this.getArticleId()
    await this.getArticleAllTags()
    console.log(this.articleTags)
  },
  methods: {
    async getArticleAllTags() { 
      Api.blog.getArticleAllTags(this.articleId).then(
        res => this.articleTags = res.tags
      )
    },
    getArticleId() {
      this.articleId = this.$route.params.id
    }
  }
}
</script>

<style>

</style>