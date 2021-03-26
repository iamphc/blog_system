const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  province: {
    type: String,
    require: true
  },
  city: {
    type: String,
    required: true
  }
});