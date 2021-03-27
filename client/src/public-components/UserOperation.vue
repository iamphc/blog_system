<template>
  <div
      class="user-operation-wrapper"
      @click="showWrapper = !showWrapper"
      v-if="showWrapper">
    <el-dialog
        title="用户操作"
        width="30%"
        :visible.sync="showDialog"
        center>
      <el-form label-width="80px" class="user-operation-form">
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showDialog: true,
        showWrapper: true
      }
    }
  }
</script>