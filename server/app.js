'use strict';

var port = process.env.PORT;

var express = require('express');
var liveReload = require('connect-livereload')

var staticRoutes = require('./routes/static.routes');
var apiRoutes = require('./routes/api.routes');

var app = express();

app.use(liveReload());
app.use(staticRoutes);
app.use(apiRoutes);

var server = app.listen(port, function () {
  console.log('Express server listening on %d', port);
});

exports = module.exports = app;