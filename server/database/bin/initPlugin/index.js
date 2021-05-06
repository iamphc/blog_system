const Plugin = require('../../models/Plugin')
const data = require('./systemData.json')

exports.init_plugin = async () => {
  console.log('pending: 正在初始化 Plugin 表数据...')
  // 当 Plugin 表为空时。触发初始化
  const isEmpty = await isPluginEmpty()
  if(isEmpty) {
    await Plugin.insertMany(data.systemPluginList).catch(
      err => {
        console.log('失败原因：', err.message)
        throw new Error()
      }
    )
  }
}

async function isPluginEmpty() {
  const res = await Plugin.find()
  return res.length === 0
}