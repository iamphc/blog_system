const BlogNote = require('../../database/models/BlogNote')

// 获取所有留言
exports.getAllNotes = async (req, res) => {
  const { userName } = req.query
  return await BlogNote.find({ userName })
}

// 添加留言
exports.addNote = async (req, res) => {
  let { userName, context, createdDate, commenter } = req.body  
  if(!commenter) {
    commenter = 'visitor'
  }
  const note = await BlogNote.create({ userName, context, createdDate, commenter })
  note.save()
  return context
}