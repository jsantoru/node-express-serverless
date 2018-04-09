const privateConfig = require('./private-config');

const config = {
  app: {
    apikey: privateConfig.app.apikey
  },
  alphavantage: {
    apikey: privateConfig.alphavantage.apikey
  },
  intrinio: {
    user: privateConfig.intrinio.user,
    pass: privateConfig.intrinio.pass
  }
};

module.exports = config;
