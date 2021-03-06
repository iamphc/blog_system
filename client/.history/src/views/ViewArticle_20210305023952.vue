<template>  
  <blog-base>
    <template v-slot:section-center>
      <!-- <el-col class="blog-body-section blog-body-section__center" :span="12">
        <article />
      </el-col>  -->
    </template>
  </blog-base>
</template>   

<script>
import Article from '@/components/Article';
import BlogBase from '@/components/BlogBase';
export default {
  components: {
    BlogBase,
    Article
  }
}
</script>

<style scoped>

</style>