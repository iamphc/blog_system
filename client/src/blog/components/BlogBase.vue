<template>
  <div class="blog-wrapper">
    <nav-header />  
    <el-row type="flex" class="blog-body">
      <!-- 插槽左部分 -->
      <div class="section-side-wrapper">
        <el-col class="blog-body-section blog-body-section__left" :span="6">
          <slot name="section-left">
            <tag-menu-list />
          </slot>
        </el-col>
      </div>
      <!-- 插槽中间部分 -->
      <el-col class="blog-body-section blog-body-section__center" :span="12">
        <slot name="section-center">
          <articles-list />
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
import GoTop from '@blog/components/GoTop'; 
import ArticlesList from '@blog/homepagePart/ArticlesList';
import TagMenuList from '@/blog/homepagePart/TagMenuList';
import TagCloud from '@blog/homepagePart/TagCloud';
import Notes from '@blog/homepagePart/Notes';
import NavHeader from '@components/NavHeader';
export default {
  components: {
    NavHeader,
    TagCloud,
    TagMenuList,
    ArticlesList,
    GoTop,
    Notes
  },
  provide() {
    return {
      type: this.type
    }
  },
  data() {
    return {
      type: null
    }
  }
}
</script>

<style scoped>
  
</style>