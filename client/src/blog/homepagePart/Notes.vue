<template>
  <div class="notes-wrapper">
    <h2 class="notes-header">留言板</h2>
    <ul class="notes-list">
      <li class="notes-item">Lorem, ipsum.</li>
      <li class="notes-item">Lorem, ipsum.</li>
      <li class="notes-item">Lorem, ipsum.</li>
      <li class="notes-item">Lorem, ipsum.</li>
      <li class="notes-item">Lorem, ipsum.</li>
    </ul>
  </div>
</template>

<script>
import { Api } from '@api'
export default {
  data() {
    return {
      notes: []
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
    }
  }
}
</script> 