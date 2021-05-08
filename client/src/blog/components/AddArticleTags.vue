<template>
  <div class="build-tags_wrapper">  
    <el-row>
      <el-tag
        class="article-tag"
        v-for="(tag, index) in allTags"
        :key="index"
        closable
        @close="handleClose(tag)"
        size="mini">
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisiable"
        v-model="inputValue"
        ref="saveTagInput"
        size="mini"
        @blur="handleInputConfirm"
        @keyup.enter.native="handleInputConfirm">
      </el-input>
      <el-button
        class="button-new-tag"
        v-else
        size="mini"
        @click="showInput">
        + New Tag
      </el-button>
    </el-row>
  </div>
</template>

<script>
import { Api } from "@api"
export default {
  data() {
    return {
      searchTag: '',
      allTags: [],
      inputVisiable: false,
      inputValue: ''
    }
  }, 
  async created() {
    await this.getUserAlltags()
    console.log(this.allTags)
  },
  methods: {
    showInput() {
      this.inputVisiable = true
    },
    handleInputConfirm() {
      let inputValue = this.inputValue 
      if(inputValue) {
        this.dynamicTag.push(inputValue)
      }
      this.inputVisiable = false
      this.inputValue = ''
    },
    handleClose(tag) {
      this.dynamicTag.splice(this.dynamicTag.indexOf(tag), 1)
    },
    showInput() {
      this.inputVisiable = true
      this.$nextTick(
        _ => this.$refs.saveTagInput.$refs.input.focus()
      )
    },
    async getUserAlltags() { 
      const userName = this.getUserName()
      Api.blog.getUserAllTags(userName).then(
        res => this.allTags = res.tags
      )
    },
    getUserName() { 
      // state 刷新之后会被清空
      return this.$store.state.userName || localStorage.getItem('userName')
    }
  }
}
</script>