<template>
  <div class="blog-wrapper">
    <nav-header />  
    <el-row type="flex" class="blog-body">
      <!-- 插槽左部分 -->
      <slot name="section-left">
        <div class="section-side-wrapper">
          <el-col class="blog-body-section blog-body-section__left" :span="6">
            <side-menu />
          </el-col>
        </div>
      </slot>
      <!-- 插槽中间部分 -->
      <slot name="section-center">
        <el-col class="blog-body-section blog-body-section__center" :span="12">
          <blog-articles-list />
        </el-col>
      </slot>
      <!-- 插槽右部分 -->
      <slot name="section-right">
        <div class="section-side-wrapper">
          <el-col class="blog-body-section blog-body-section__right" :span="6">
            <tag />
            <notes />
          </el-col>
        </div>
      </slot>
    </el-row> 
    <go-top />
  </div>
</template>

<script> 
import BlogArticlesList from '@blog/components/BlogArticlesList';
import Notes from '@blog/components/Notes';
import GoTop from '@blog/components/GoTop'; 
import SideMenu from '@blog/components/SideMenu';
import Tag from '@blog/components/Tag';
import NavHeader from '@components/NavHeader';
export default {
  components: {
    NavHeader,
    Tag,
    SideMenu,
    BlogArticlesList,
    GoTop,
    Notes
  }
}
</script>

<style scoped>
  
</style>