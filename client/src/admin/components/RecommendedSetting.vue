<template>
  <div class="article-statistic__wrapper" ref="articleStatistic"></div>
</template>

<script>
import { initDynamicSortLine } from '@utils/echarts'
export default {
  mounted() {
    const dom = this.$refs.articleStatistic
    console.log(dom)
    initDynamicSortLine(dom)
  }
}
</script>

<style>
  .article-statistic__wrapper {
    width: 100%;
    height: 300px;
  }
</style>