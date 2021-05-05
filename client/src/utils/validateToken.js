/**
 * 校验 cookie 中的 token 是否存在，是否过期
 */
export function validateToken() { 
  const token = document.cookie.match(/(?=token)[^;]+/)
  return token && token[0] !== ''
}