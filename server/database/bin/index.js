const { init_blog_theme } = require('./initBlogTheme') 
const { init_blog_tag } = require('./initBlogTag')
const { init_plugin } = require('./initPlugin')
const { init_user } = require('./initUser')

/**
 * 初始化mongodb相关数据表数据
 */
init_mongodb_data().then(
  _ => console.log('success: 初始化数据成功!!!\n===============')
).catch( 
  _ => console.log('fail: 初始化数据失败!!!\n===============') 
) 

async function init_mongodb_data() { 
  console.log('===============')
  console.log('pending: 正在初始化数据表数据...')
  /**
   * 初始化博客主题颜色数据
   */
  await init_blog_theme().then(
    _ => console.log('success: 初始化数据表 BlogTheme 成功!!!')
  ).catch(
    _ => {
      console.log('fail: 初始化数据表 BlogTheme 失败!!!')
      throw new Error()
    }
  )
  /**
   * 初始化用户表
   */
  await init_user().then(
    _ => console.log('success: 初始化数据表 User 成功!!!')
  ).catch(
    _ => {
      console.log('fail: 初始化数据表 User 失败!!!')
      throw new Error()
    }
  )
  /**
   * 初始化插件表
   */
  await init_plugin().then(
    _ => console.log('success: 初始化数据表 Plugin 成功!!!')
  ).catch(
    _ => {
      console.log('fail: 初始化数据表 Plugin 失败!!!')
      throw new Error()
    }
  )
  /**
   * 初始化标签表
   */
  await init_blog_tag().then(
    _ => console.log('success: 初始化数据表 BlogTag 成功!!!')
  ).catch(
    _ => {
      console.log('fail: 初始化数据表 BlogTag 失败!!!')
      throw new Error()
    }
  )
}

