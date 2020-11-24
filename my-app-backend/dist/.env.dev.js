'use strict';

var HOST = process.env.HOST ? process.env.HOST : 'localhost';
var PORT = process.env.PORT ? process.env.PORT : 3000;
var BASE_URL = process.env.BASE_URL ? process.env.BASE_URL : '';
var SERVER_HOST = process.env.SERVER_HOST ? process.env.SERVER_HOST : 'localhost';
var SERVER_URL = process.env.SERVER_URL ? process.env.SERVER_URL : process.env.SERVER_HOST ? "https://".concat(SERVER_HOST).concat(BASE_URL) : "http://".concat(HOST, ":").concat(PORT).concat(BASE_URL);
module.exports = {
  HOST: HOST,
  PORT: PORT,
  BASE_URL: BASE_URL,
  SERVER_URL: SERVER_URL,
  CLIENT_ID: process.env.CLIENT_ID,
  API_KEY: process.env.API_KEY
};