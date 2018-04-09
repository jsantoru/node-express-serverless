const serverless = require('serverless-http');
const express = require('express');
const app = express();
const router = require('./router');

// endpoints

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/api/', router);

// run as serverless
module.exports.handler = serverless(app);

// run as express service
//app.listen(3000, () => console.log('Example app listening on port 3000!'));
