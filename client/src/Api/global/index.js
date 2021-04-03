import axios from "axios";

export default {
  userRegister(userRegisterForm) { 
    console.log(userRegisterForm);
    return axios.post("/user/register", {
      ...userRegisterForm
    })
    // .then(res => {
    //   alert('注册成功');
    // }).catch(err => {
    //   console.log('注册失败');
    // })
    ;
  }
}