<template>
  <div class="group-statistic__wrapper" ref="groupStatistic"></div>
</template>

<script>
import { initOther } from '@utils/echarts'
export default {
  mounted() {
    const dom = this.$refs.groupStatistic
    initOther(dom)
  }
}
</script>

<style>
  .group-statistic__wrapper {
    width: 100%;
    height: 300px;
  }
</style>