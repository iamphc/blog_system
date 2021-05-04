<template> 
  <div class="article-wrapper article-item">
    <h1 class="article-title">{{ articleRaw.title }}</h1>
    <div class="article-update-detailes">
      <span class="article-upload-time">{{ articleRaw.lastUpdatedDate }}</span> 
    </div>
    <div class="article-context">
      <span class="article-content">{{ articleRaw.context }}</span> 
    </div>
  </div>   
</template>

<script>
export default {
  props: {
    articleRaw: {
      type: Object,
      default() {
        return {
          title: '默认标题',
          context: '默认正文...',
          createdDate: new Date(),
          lastUpdatedDate: new Date(),
          userName: 'no man',
          id: '-1'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>