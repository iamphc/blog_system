const { init_blog_theme } = require('./initBlogTheme')

/**
 * 初始化mongodb相关数据表数据
 */
init_mongodb_data().then(
  _ => console.log('success: 初始化数据成功!!!')
).catch( 
  _ => console.log('fail: 初始化数据失败!!!\n===============') 
)

async function init_mongodb_data() { 
  console.log('===============')
  console.log('pending: 正在初始化数据表数据...')
  // 初始化博客主题颜色数据
  await init_blog_theme().then(
    _ => console.log('success: 初始化数据表 BlogTheme 成功!!!')
  ).catch(
    _ => {
      console.log('fail: 初始化数据表 BlogTheme 失败!!!')
      throw new Error()
    }
  )
}

