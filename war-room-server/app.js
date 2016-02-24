require('dotenv').load()
var express = require('express')
var path = require('path')
var logger = require('morgan')
var db = require('./db/dbconnect')

var app = express()

var url = process.env.MONGOLAB_URI || 'mongodb://localhost/warroom'
db.connect(url, function(err) {
  if (err) {
    console.log('Error connecting to DB')
    process.exit(1)
  }
})

app.set('json spaces', 2)

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, '../war-room-client')))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})

module.exports = app
