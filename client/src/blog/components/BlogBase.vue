<template>
  <div class="blog-wrapper">
    <nav-header />  
    <el-row type="flex" class="blog-body">
      <!-- 插槽左部分 -->
      <div class="section-side-wrapper">
        <el-col class="blog-body-section blog-body-section__left" :span="6">
          <slot name="section-left">
            <category-menu />
          </slot>
        </el-col>
      </div>
      <!-- 插槽中间部分 -->
      <el-col class="blog-body-section blog-body-section__center" :span="12">
        <slot name="section-center">
          <blog-articles-list />
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
import BlogArticlesList from '@blog/components/BlogArticlesList';
import Notes from '@blog/components/Notes';
import GoTop from '@blog/components/GoTop'; 
import CategoryMenu from '@/blog/components/CategoryMenu';
import TagCloud from '@blog/blogPart/TagCloud';
import NavHeader from '@components/NavHeader';
export default {
  components: {
    NavHeader,
    TagCloud,
    CategoryMenu,
    BlogArticlesList,
    GoTop,
    Notes
  }
}
</script>

<style scoped>
  
</style>