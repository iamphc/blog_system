const BlogNote = require('../../database/models/BlogNote')

exports.getAllNotes = async (req, res) => {
  const { userName } = req.query
  return await BlogNote.find({ userName })
}