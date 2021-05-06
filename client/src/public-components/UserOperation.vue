<template>
  <div class="user-operation-wrapper">  
    <el-dialog
        class="user-operation-dialog"
        :title="getUserOperation"
        width="30%"
        :visible.sync="showDialog"
        :before-close="handleBeforeCloseDialog"
        center>
      <el-form 
        ref="ruleForm"
        :model="ruleForm"
        :rules="getUserOperationRules"
        label-width="80px" 
        class="user-operation-form">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPwd" ref="userPwd">
          <el-input v-model="ruleForm.userPwd"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verifiCode">
          <el-input v-model="ruleForm.verifiCode"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleRegister()">{{operationText[0]}}</el-button>
          <el-button @click="handleResetForm()">清空</el-button>
          <el-button @click="handleLogin()">{{operationText[1]}}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import { Api } from '@api'
  import { mapState, mapMutations } from 'vuex'
  import * as types from '@store/mutation-types'

  export default {
    data() {
      return {
        operationText: ['去注册', '登录'],
        operationType: 'login',
        registerMsg: '',
        showDialog: true,
        ruleForm: {
          userName: '',
          userPwd: '',
          verifiCode: ''
        },
        // 注册表单验证规则
        registerRules: {
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
        },
        // 登录表单验证规则
        loginRules: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          userPwd: [
            {required: true, message: '请输入密码', triiger: 'blur'}
          ],
          verifiCode: [
            {message: '请输入验证码', trigger: 'blur'}
          ]
        }
      }
    },
    created() { 
      // 如果token过期前登录，则跳过登录
      // 问题：过期时间内保存的 token 一定有效吗？需要做校验？
      if(this.getToken().token) {
        this.showDialog = false
      } else {
        // token不存在，或过期时，清空 userName 
        this.userName(null)
      }
    },
    methods: {
      ...mapMutations({
        userName: types.USER_NAME
      }),
      getToken() {
        const cookie = document.cookie
        const res = { token: null, status: 'fail' }
        if(cookie) {
          const tokenStr = cookie.match(/(?=token\=)[\w\W]+/) && cookie.match(/(?=token\=)[\w\W]+/)[0]
          if(tokenStr) {
            res.token = tokenStr.substr(6)
            res.status = 'success'
          }
        } 
        return res
      },
      // 页面加载前判断是否有token，存在token，自动登录
      // 否则，弹出用户注册界面
      handleRegister() {
        if(this.operationType !== 'register') {  
          this.triggerOperationText()
          this.handleResetForm()
          this.operationType = 'register'
          return
        }
        this.$refs['ruleForm'].validate(valid => {
          if(!valid) 
            return false;
          // 表单提交、触发用户注册接口
          Api.global.userRegister(this.ruleForm).then(
            res => {
              this.operationMsgPrompt(
                res.msg, 
                res.status === 'success' 
                  ? 'success' 
                  : 'error'
              )
              // 注册成功，token存储在cookie，跳转到登录页面、按钮文案更改。注册失败，保持注册窗口
              if(res.status === 'success') {
                this.operationType = 'login'
                this.triggerOperationText()
                // 清空密码
                this.$refs['userPwd'].resetField()
              }
            }
          ).catch(
            err => this.operationMsgPrompt(err, "error")
          );
        })
      },
      handleResetForm() {
        this.$refs['ruleForm'].resetFields();
      },
      // 用户操作信息提示框
      operationMsgPrompt(message, type) {
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
      }, 
      handleLogin() {
        if(this.operationType !== 'login') {
          this.triggerOperationText()
          this.handleResetForm()
          this.operationType = 'login'
          return
        }
        this.$refs['ruleForm'].validate(valid => {
          if(!valid) 
            return false;
          Api.global.userLogin(this.ruleForm).then(
            res => {
              this.operationMsgPrompt(
                res.msg, 
                res.status === 'success' 
                  ? 'success' 
                  : 'error'
              )
              // 登陆成功，关闭窗口.重载页面
              // 登录失败，保持窗口，清空信息： 用户名错误，清空所有。密码错误，清空密码
              if(res.status === 'success') {
                this.showDialog = false 
                this.userName(this.ruleForm.userName)
                setTimeout(() => location.reload(), 1500) 
                return 
              } 
              if(res.errorField === 'userName') {
                this.handleResetForm()
                return
              }
              this.$refs['userPwd'].resetField()
            }
          )
        })
      },
      // 注册/登录时：切换用户操作文案
      triggerOperationText() {
        this.operationText = this.operationText.map(
          ele => {
            return ele.indexOf('去') === 0 
              ? ele.slice(1) 
              : ('去' + ele)
          }
        )
      },
    }, 
    computed: {
      // 用户操作表单标题文案
      getUserOperation() {
        return this.operationType === 'register' 
          ? '用户注册'
          : '用户登录'
      },
      // 用户操作表单规则
      getUserOperationRules() {
        return this.operationType === 'register' 
          ? this.registerRules 
          : this.loginRules
      }
    }
  }
</script>