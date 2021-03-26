const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/phc", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('连接已打开');
});