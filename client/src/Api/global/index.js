import axios from "axios";

export default {
  userRegister(userRegisterForm) {
    alert(userRegisterForm);
    return axios.post("/users/register", {
      username,
      userPwd
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
}