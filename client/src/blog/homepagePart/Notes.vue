<template>
  <div class="notes-wrapper">
    <h2 class="notes-header">留言板</h2>
    <ul class="notes-list">
      <li 
        class="notes-item"
        v-for="(note, index) in notes"
        :key="index">
        {{note.context}}
      </li>
    </ul>
    <el-divider />
    <div class="add-note-wrapper">
      <el-input v-model="newNote" class="add-note-input" />
      <el-button 
        class="add-note-btn" 
        type="primary"
        size="small"
        @click="addNote">
        添加留言
      </el-button>
    </div>
  </div>
</template>

<script>
import { Api } from '@api'
export default {
  data() {
    return {
      notes: [],
      newNote: ''
    }
  },
  async created() {
    await this.getNotes()
    console.log(this.notes)
  },
  methods: {
    async getNotes() {
      const userName = this.getUserName()
      Api.global.getAllNotes(userName).then(
        res => {
          if(res.status === 'success') {
            this.notes = res.notes
          } else {
            throw new Error(res.msg)
          }
        }
      ).catch(
        err => console.log(err.message)
      )
    },
    getUserName() { 
      // state 刷新之后会被清空
      return this.$store.state.userName || localStorage.getItem('userName')
    },
    addNote() {
      if(this.newNote === '') {
        this.msgPrompt('留言不能为空', 'error')
        return
      }
      const options = {
        userName: this.getUserName(),
        context: this.newNote,
        createdDate: new Date()
      }
      Api.global.addNote(options).then(
        res => {
          if(res.status === 'success') {
            this.msgPrompt(res.msg, 'success')
            this.notes.push({ context: res.context })
          } else {
            this.msgPrompt(res.msg, 'error')
          }
        }
      ).catch(
        err => console.log(err.message)
      )
    },
    msgPrompt(message, type) {
      this.$message({ message, type })
    }
  }
}
</script> 