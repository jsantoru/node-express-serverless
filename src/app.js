const serverless = require('serverless-http');
const express = require('express');
const app = express();
const router = require('./router');

// endpoints

/*
 * static content
 */
app.use('/', express.static('web/projectname'));

/*
 * api
 */
app.use('/api/', router);

if("service" === process.argv[2]) {
  // run as express service
  app.listen(3000, () => console.log('Running as a service on port 3000'));
}
else {
  // run as serverless
  module.exports.handler = serverless(app);
}
