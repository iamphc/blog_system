<template>
  <blog-base>
    <!-- 左侧：添加标签、构建标签树 -->
    <template v-slot:section-left>
      <build-tags></build-tags>
    </template>
    <!-- 中间：编辑博客文本 -->
    <template v-slot:section-center>
      <edit-article></edit-article>
    </template>
  </blog-base>
</template>

<script>
import BlogBase from '@blog/components/BlogBase';
import EditArticle from "@blog/components/EditArticle";
import BuildTags from "@blog/components/BuildTags";

export default {
  components: {
    BlogBase,
    EditArticle,
    BuildTags
  }
}
</script>