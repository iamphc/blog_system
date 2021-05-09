var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var debug = require('debug')('http');
var http = require('http');
const { verify } = require('./services/global/token');
 
const blog = require('./routes/blog');               // 博客主页
const blogSetting = require('./routes/blogSetting'); // 博客设置
const develop = require('./routes/develop');         // 开发者模式
const admin = require('./routes/admin');             // 后台管理
const groupAdmin = require('./routes/groupAdmin')    // 组管理
const global = require('./routes/global');           // 全局

// 连接「blog-system-backend」数据库
require('./database');

// set debug
debug('booting 「blog system backend」...');
http.createServer(function(req, res) {
  debug(req.method + ' ' + req.url);
  res.send('hello\n');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 
app.use('/static', express.static(path.join(__dirname, 'public')));

// 全局中间件：token验证
app.use(verify)

// 路由分发
app.use('/api/blog', blog);
app.use('/api/blog-setting', blogSetting);
app.use('/api/admin', admin);
app.use('/api/develop', develop);
app.use('/api/group-admin', groupAdmin)
app.use('/api/global', global);

// catch 404 and forward to error handler
app.use(function(req, res, next) { 
  next(createError(404)); 
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
