<template>
  <blog-base>
    <!-- 左侧：添加标签、构建标签树 -->
    <template v-slot:section-left>
      <add-article-tags />
    </template>
    <!-- 中间：编辑博客文本 -->
    <template v-slot:section-center>
      <edit-article></edit-article>
    </template>
  </blog-base>
</template>

<script>
import BlogBase from '@blog/components/BlogBase'
import EditArticle from "@blog/components/EditArticle"
import AddArticleTags from "@blog/components/AddArticleTags" 

export default {
  components: {
    BlogBase,
    EditArticle,
    AddArticleTags
  }
}
</script>