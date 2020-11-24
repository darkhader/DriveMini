"use strict";

var fs = require('fs');

var path = require('path');

var compression = require('compression');

var express = require('express');

var filemanagerMiddleware = require('@opuscapita/filemanager-server').middleware;

var logger = require('@opuscapita/filemanager-server').logger;

var env = require('./.env');

var config = {
  fsRoot: __dirname,
  rootName: 'Root folder',
  port: process.env.PORT || '3020',
  host: process.env.HOST || 'localhost'
};
var app = express();
var host = process.env.HOST || 'localhost';
var port = process.env.PORT || '3020'; // fs.writeFileSync(
//   path.resolve(__dirname, './static/env.js'),
//   'window.env = ' + JSON.stringify(env) + ';'
// );

app.use(compression());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
var baseUrl = process.env.BASE_URL || '/';
app.use(baseUrl, filemanagerMiddleware(config)); // app.use(baseUrl, express.static(path.resolve(__dirname, './static')));

app.listen(port, host, function (err) {
  if (err) {
    logger.error(err);
  }

  logger.info("Server listening at http://".concat(host, ":").concat(port));
});
process.on('exit', function () {
  logger.warn('Server has been stopped');
});