var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/blog-system-backend", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
    console.log('数据库「blog-system-backend」已连接...');
});