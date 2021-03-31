import axios from "axios";

export default {
  userRegister(userRegisterForm) { 
    console.log(userRegisterForm);
    return axios.post("/menusItems", {
      ...userRegisterForm
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
}