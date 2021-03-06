<template> 
  <el-row class="nav-header-wrapper">
    <el-col :span="6" class="header-title-wrapper">
      <router-link to="/">
        <span>{{userName}}的技术博客</span>
      </router-link>
    </el-col>
    <el-col :span="3" class="header-btn-wrapper">
      <el-button type="primary" round>后台设置</el-button></el-button>
    </el-col>
    <el-col :span="3" class="header-btn-wrapper">
      <el-button type="primary" round>控制面板</el-button></el-button>
    </el-col>
    <el-col :span="3" class="header-btn-wrapper">
      <el-button type="primary" round>开发者模式</el-button>
    </el-col>
  </el-row> 
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: "庞海川",
    },
    theme: {
      type: Object,
      default() {
        return {
          backgroundColor: "#7868e6",
          fontColor: "#fff"
        }
      }
    }
  },
  mounted() {
    this.setTheme()
  },
  methods: {
    setTheme() {
      let wrapper = document.querySelector(".nav-header-wrapper")
      wrapper.style.backgroundColor = this.theme.backgroundColor
      wrapper.style.color = this.theme.fontColor
    }
  }
}
</script>

<style scoped>
  .nav-header-wrapper { 
    text-align: center;
    padding: 15px 15%;
    font-size: 3rem;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    right: 0; 
  }
  .header-title-wrapper {
    line-height: 40px;
    text-align: left;
  }
  .header-btn-wrapper {
    float: right;
    text-align: right;
  }
</style>