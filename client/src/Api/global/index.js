import axios from "axios";

export default {
  userRegister(userRegisterForm) { 
    console.log(userRegisterForm);
    return axios.post("/user/register", {
      ...userRegisterForm
    });
  }
}