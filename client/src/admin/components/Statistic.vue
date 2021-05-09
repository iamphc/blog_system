<template>
  <div class="blog-statistic__wrapper" ref="blogStatistic"></div>
</template>

<script>
import { initHistogram } from '@utils/echarts'
export default {
  mounted() {
    const dom = this.$refs.blogStatistic
    initHistogram(dom)
  }
}
</script>

<style>
  .blog-statistic__wrapper {
    width: 100%;
    height: 300px;
  }
</style>