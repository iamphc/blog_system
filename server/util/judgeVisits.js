/**
 * 判断操作的权限是否为游客级的操作
 * 游客级：无需登录，即可查看
 * 用户级：需要登录，才能查看
 */
module.exports = (url) => {
  const regExp = new RegExp(/\/api\/((develop)|(blog-setting)|(admin)|(group-admin)|(blog)|(global)[\w\W]+)|(blog\/article\/create)/) 
  return regExp.test(url)
}