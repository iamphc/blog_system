<template>
  <div class="build-tags_wrapper">
    <el-select
      v-model="searchTag"
      placeholder="给个标签吧"
      filterable>
    </el-select>
    <el-divider></el-divider>
    <el-row>
      <el-tag
        class="article-tag"
        v-for="tag in dynamicTag"
        :key="tag"
        closable
        @close="handleClose(tag)">
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisiable"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @blur="handleInputConfirm"
        @keyup.enter.native="handleInputConfirm">
      </el-input>
      <el-button
        class="button-new-tag"
        v-else
        size="small"
        @click="showInput">
        + New Tag
      </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTag: '',
      dynamicTag: ['标签一', '标签二', '标签三'],
      inputVisiable: false,
      inputValue: ''
    }
  },
  beforeCreated() {},
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
    }
  }
}
</script>