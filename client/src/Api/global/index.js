import axios from "axios";

export default {
  userLogin(username, userPwd) {
    return axios.post("/users/login", {
      username,
      userPwd
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
}