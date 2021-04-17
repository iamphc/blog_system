<template>
  <el-row 
    class="theme-pick-wrapper" 
    type="flex">
    <el-col
      class="theme-color-item"
      :span="6"
      v-for="theme in themeColorList"
      :key="theme.index"
      ref="pickCol">
        <el-button 
          class="theme-circle"
          circle >
        </el-button>
        <span class="theme-name">{{theme.name}}</span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      themeColorList: [
        {
          index: 0,
          color: "e3b4b8",
          name: "鼠鼻红"
        },
        {
          index: 1,
          color: "2b333e",
          name: "青灰"
        },
        {
          index: 2,
          color: "29b7cb",
          name: "蔚蓝"
        },
        {
          index: 3,
          color: "ffa60f",
          name: "金叶黄"
        },
        {
          index: 4,
          color: "f9cb8b",
          name: "瓜瓤粉"
        }
      ]
    }
  },
  mounted() {   
    console.log(this.$refs.pickCol['0'])
    this.setButtonThemes()
  },
  methods: {
    setButtonThemes() {
      this.$refs.pickCol.forEach((col, index) => {
        col.$children[0].$el.style.backgroundColor = `#${this.themeColorList[index].color}`
      })
    }
  }
}
</script>