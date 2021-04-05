<template>
  <div class="user-operation-wrapper">
    <el-dialog
        class="user-operation-dialog"
        title="用户注册"
        width="30%"
        :visible.sync="showDialog"
        :before-close="handleBeforeCloseDialog"
        center>
      <el-form 
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="80px" 
        class="user-operation-form">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPwd">
          <el-input v-model="ruleForm.userPwd"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verifiCode">
          <el-input v-model="ruleForm.verifiCode"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleRegister('ruleForm')">注册</el-button>
          <el-button @click="handleResetForm('ruleForm')">清空</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import {Api} from '@api';
  export default {
    data() {
      return {
        registerMsg: '',
        showDialog: true,
        ruleForm: {
          userName: '',
          userPwd: '',
          verifiCode: ''
        },
        rules: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 5, max: 15, message: '长度在5～15个字符内', trigger: 'blur'}
          ],
          userPwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 5, max: 15, message: '长度在5～15个字符内', trigger: 'blur'}
          ],
          verifiCode: [
            {message: '请输入验证码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleRegister(ruleForm) {
        this.$refs[ruleForm].validate(valid => {
          if(!valid) 
            return false;
          // 表单提交、触发用户注册接口
          Api.global.userRegister(this.ruleForm).then(
            res => this.registerMsgPrompt(res.msg, res.registerStatus === 'success' ? 'success' : 'error')
          ).catch(
            err => this.registerMsgPrompt(err, "error")
          );
        })
      },
      handleResetForm(ruleForm) {
        this.$refs[ruleForm].resetFields();
      },
      // 用户注册信息提示框
      registerMsgPrompt(message, type) {
        this.$message({
          message, 
          type
        });
      },
      handleBeforeCloseDialog(done) {
        this.$confirm('确认关闭？关闭之后，您将作为游客身份浏览').then(
          _ => done()
        ).catch(
          _ => {}
        );
      }
    },
    mounted() {}
  }
</script>