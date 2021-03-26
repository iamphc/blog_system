var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const blog = require('./routes/blog');    // 博客主页
const blogSetting = require('./routes/blog-setting'); // 博客设置
const develop = require('./routes/develop');  // 开发者模式
const admin = require('./routes/admin');    // 后台管理
const global = require('./routes/global');  // 全局

// 连接「blog-system-backend」数据库
const {
  GlobalSettingMenu,
  BlogHomepageMenu,
  BlogArticles,
  BlogNotes,
  BlogTags,
  Users
} = require('./database');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 路由分发
app.use('/blog', blog);
app.use('/blog-setting', blogSetting);
app.use('/admin', admin);
app.use('/develop', develop);
app.use('/global', global);

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
