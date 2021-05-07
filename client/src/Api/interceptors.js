import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use(request => {
  console.log('请求成功：',request)
  return request
}, err => {  
  console.log('请求失败：',err.message);
});

// 响应拦截器
axios.interceptors.response.use(response => {
  console.log('响应成功：',response)
  return response.data;
}, err => { 
  console.log('响应失败：', err.message) 
});