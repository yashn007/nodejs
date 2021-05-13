'use strict';
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var config =  require('./config/config');
var dp =  require('./db/db');
/**
 * { app initialised }
 *
 */
var app = express();
var UsersRouter =  require('./mvc/users/routes/UserRoutes');
var EmailRouter = require('./mvc/email/routes/email.routes');

/**
 * { set app properties }
 *
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: config.secret }));
app.use(express.static(path.join(__dirname, './../admin')));
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Headers", 'Content-Type,Accept');
  next();
});


app.get('*', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './../admin') });
});
/**
 * { catch 404 and forward to error handler }
 *
 */
 app.use((request, response, next) => {
  console.log("------------------------------- New Request ------------------------------------")
  console.log("For Path: ", request.url)
  if (
    (request.url.toLowerCase().startsWith('/uploads/')) ||
    (request.url.toLowerCase() === '/users/login') ||
    (request.url.toLowerCase() === '/users/session')||
    (request.url.toLowerCase() === '/users/create/account') ||
    (request.url.toLowerCase() === '/users/reset/password') ||
    (request.url.toLowerCase() === '/email/forgot/password')
  ) {
    next()
  } else if (
    (!request.url.toLowerCase().startsWith(''))
  ) {
    console.log('I am here in 59');
    next()
  } else {
    console.log('I am here in 62');
  }
})


app.use('/users',UsersRouter);
app.use('/email',EmailRouter);
var port = process.env.PORT || 8080;

/**
 * { START THE SERVER }
 *
 */
app.listen(port,function() {
	console.log('server is running on port',port);
});

module.exports = app;
