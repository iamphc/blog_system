import axios from 'axios';

// 请求拦截器
axios.interceptors.request.use(request => {
  console.log(request);
  return request;
}, err => {
  return Promise.reject(err);
});

// 响应拦截器
axios.interceptors.response.use(response => {
  return response; 
}, err => {
  return Peomise.reject(err);
});