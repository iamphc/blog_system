import axios from "axios";

export default {
  userRegister(userRegisterForm) {  
    return axios.post("/user/register", {
      ...userRegisterForm
    });
  },
  userLogin(userLoginForm) {
    return axios.post("/");
  }
}