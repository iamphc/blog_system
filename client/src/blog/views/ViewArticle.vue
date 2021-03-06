<template>  
  <blog-base>
    <template v-slot:section-center>
      <el-col class="blog-body-section blog-body-section__center" :span="12">
        <blog-article />
      </el-col>
    </template>
  </blog-base>
</template>   

<script>
import BlogArticle from '@blog/components/BlogArticle';
import BlogBase from '@blog/components/BlogBase';
export default {
  components: {
    BlogBase,
    BlogArticle
  }
}
</script>

<style scoped>

</style>