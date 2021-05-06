const User = require('../../models/User')
const data = require('./systemData.json')

exports.init_user = async () => {
  console.log('pending: 正在初始化 User 表数据...')
  // 当 User 表没有 data 中的任何一个用户时，触发初始化
  const isLack = await isUserLack()
  if(isLack) {
    await addUserLoginTime()
    await User.insertMany(data.systemUserList).catch(
      err => { 
        console.log('失败原因: ', err.message)
        throw new Error()
      }
    )
  }
}

async function isUserLack() {
  const _have_normal_ = await User.find({ userName: 'normal' })
  const _have_member_ = await User.find({ userName: 'normal' })
  const _have_admin_ = await User.find({ userName: 'admin' })

  if(_have_admin_.length === 0 || _have_member_.length === 0 || _have_normal_.length === 0) {
    return true
  } 
  return false
}

async function addUserLoginTime() {
  const date = new Date()
  data.systemUserList.map(item => {
    item.userLoginTime = date
    return item
  })
}