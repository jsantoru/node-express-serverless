// index.js

const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

module.exports.handler = serverless(app);

//app.listen(3000, () => console.log('Example app listening on port 3000!'));
