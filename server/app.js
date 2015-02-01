'use strict';

var port = process.env.PORT;
var config = require('../config');

var express = require('express');
var liveReload = require('connect-livereload')
var serveStatic = require('serve-static');

var app = express();

app.use(liveReload());
app.use(serveStatic('.tmp'));
app.use('/bower_components', serveStatic('./bower_components')),
app.use(serveStatic(config.client));

var server = app.listen(port, function () {
  console.log('Express server listening on %d', port);
});

exports = module.exports = app;