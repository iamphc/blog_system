<template>
  <div class="build-tags__wrapper">  
    <el-row>
      <div class="select-article-tags">
        <h4 class="title">本文标签</h4>
      </div>
      <div class="add-new-tag__wrapper">
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
      </div>
      <div class="add-new-tag__wrapper">
        <el-tag 
          class="article-tag"
          v-for="(name, index) in articleSelectedTags"
          :key="index"
          type="success"
          size="mini"
          closable
          @close="handleClose(name, index)">
          {{ name }}
        </el-tag>
      </div>
      <el-divider class="divide" />
      <div class="selectable-tags">
        <h4 class="title">所有标签</h4>
        <el-tag
          class="article-tag"
          v-for="(tag, index) in allTags"
          :key="index" 
          size="mini"
          :type="tag.type"
          @click="selectTag(index)">
          {{tag.name}}
        </el-tag>
      </div>
    </el-row>
  </div>
</template>

<script>
import { Api } from "@api"
import * as types from '@/store/mutation-types'
import { mapMutations } from 'vuex'
export default {
  data() {
    return { 
      allTags: [], // 所有可选用的标签,
      articleSelectedTags: [],  // 已选的本文标签
      inputVisiable: false,
      inputValue: ''
    }
  }, 
  async created() { 
    await this.getUserAlltags()
    this.initSelecteTags()
    console.log('allTags:', this.allTags)
  },
  methods: { 
    ...mapMutations('blog', {
      'setTags': types.ARTICLE_SELECTED_TAGS
    }),
    async getUserAlltags() { 
      const userName = this.getUserName()
      Api.blog.getUserAllTags(userName).then(
        res => {
          this.allTags = res.tags
          this.addTypeToAllTags() 
        }
      )
    },
    getUserName() { 
      // state 刷新之后会被清空
      return this.$store.state.userName || localStorage.getItem('userName')
    },
    addTypeToAllTags() {
      this.allTags = this.allTags.map(tag => {
        return {
          name: tag,
          type: 'info'
        }
      }) 
    },
    initSelecteTags() {
      this.articleSelectedTags = []
      this.setTags({ articleSelectedTags: [] })
    },
    // 选择标签
    selectTag(index) {
      if(this.allTags[index].type === 'success') {
        return
      }
      const { name } = this.allTags[index]
      this.articleSelectedTags.push(name) 
      this.setTags({ articleSelectedTags: this.articleSelectedTags })
      this.$set(this.allTags, index, { name, type: 'success' })
      console.log('now: ', this.articleSelectedTags)
    },
    showInput() {
      this.inputVisiable = true
      this.$nextTick(
        _ => this.$refs.saveTagInput.$refs.input.focus()
      )
    },
    handleInputConfirm() {
      let inputValue = this.inputValue 
      if(inputValue) {
        this.articleSelectedTags.push(inputValue)
        this.setTags({ articleSelectedTags: this.articleSelectedTags })
      }
      this.inputVisiable = false
      this.inputValue = ''
    },
    handleClose(name, index) {
      this.articleSelectedTags.splice(index, 1)  
      this.setTags({ articleSelectedTags: this.articleSelectedTags })
      const _index = this.allTags.findIndex(item => item.name === name) 
      this.$set(this.allTags, _index, { name, type: 'info' })
    }
  }
}
</script>