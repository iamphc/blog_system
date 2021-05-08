<template>
  <section class="tag-clouds">
    <div class="tag-clouds__header">
      <span class="title">标签云</span>
    </div> 
    <div class="tag-cloud-list" ref="tagCloud"></div>
  </section>
</template>

<script>
import TagCloud from 'TagCloud'
import { Api } from '@api'
export default {
  data() {
    return {
      tags: []  // 所有标签
    }
  },
  async created() {
    await this.getUserAlltags()  
    console.log(this.tags)
  },
  mounted() {},
  methods: {
    async getUserAlltags() {
      const userName = this.getUserName() 
      await Api.blog.getUserAllTags(userName).then(
        res => this.tags = res.tags   
      )
    },
    getUserName() { 
      // state 刷新之后会被清空
      return this.$store.state.userName || localStorage.getItem('userName')
    },
    // 初始化标签云
    initCloudTag() { 
      const container = this.$refs.tagCloud 
      const options = {} 
      new TagCloud(container, this.tags, options)
    }
  },
  watch: {
    tags() { 
      this.initCloudTag()
    }
  }
}
</script> 