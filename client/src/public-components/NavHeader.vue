<template> 
  <el-row class="nav-header-wrapper">
    <el-col :span="6" class="header-title-wrapper">
      <router-link to="/"> 
        <span>{{getNavTitle}}</span>
      </router-link>
    </el-col>
    <el-col :span="3" class="header-btn-wrapper">
      <router-link to="/setting">
        <el-button type="primary" round>后台设置</el-button>
      </router-link>
    </el-col>
    <el-col :span="3" class="header-btn-wrapper">
      <router-link to="/admin">
        <el-button type="primary" round>控制面板</el-button>
      </router-link>
    </el-col>
    <el-col :span="3" class="header-btn-wrapper">
      <router-link to="/develop">
        <el-button type="primary" round>开发者模式</el-button>
      </router-link>
    </el-col>
  </el-row> 
</template>

<script>
  export default {
    props: {
      navTitle: {
        type: Object,
        default() {
          return {
            type: "blog",
            name: "庞海川"
          }
        },
      },
      theme: {
        type: Object,
        default () {
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
    },
    computed: {
      getNavTitle() {
        let title = ""
        switch(this.navTitle.type) {
          case "blog":
            title = this.navTitle.name + "的技术博客"
            break;
          case "blog-setting":
            title = "博客页面设置"
            break;
          case "admin":
            title = "后台统计"
            break;
          case "develop":
            title = "开发者模式"
            break;
        }
        return title
      }
    }
  }
</script> 