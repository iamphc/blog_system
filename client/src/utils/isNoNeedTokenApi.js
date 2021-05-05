/**
 * 判断当前路由是否不需要 token，即为 login 或 register
 */
export function isNoNeedTokenApi(url) { 
  return url !== '/user/login' && url !== '/user/register'
}