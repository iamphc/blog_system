<template>
  <div class="edit-article_wrapper"> 
    <span class="article-title" contenteditable="true" data-placeholder="标题"></span>
    <el-divider></el-divider>
    <textarea class="article-maintain" contenteditable="true" data-placeholder="请输入正文"></textarea>
    <el-divider></el-divider>
    <div class="operation-zone">
      <el-button
        class="submit-article">
        上传文章
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>