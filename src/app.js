const serverless = require('serverless-http');
const express = require('express');
const app = express();

const config = require('../config/config');

const router = require('./router');

/*
 * static content
 */
app.use('/', express.static('web/espp-calc'));

/*
 * api
 */
// apikey is required for all api calls
app.use(function(req, res, next) {
  if(req.query.apikey === config.app.apikey) {
    next();
  }
  else {
    res.send("invalid apikey");
  }
});

// all responses are json
app.use(function(req, res, next) {
  res.set('Content-Type', 'application/json');
  next();
});

app.use('/api/', router);

if("service" === process.argv[2]) {
  // run as express service
  app.listen(3000, () => console.log('Running as a service on port 3000'));
}
else {
  // run as serverless
  module.exports.handler = serverless(app);
}
