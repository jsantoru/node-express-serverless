// don't check in the private config
const privateConfig = require('./private-config');

// map the properties to the config for the app
const config = {
  stringProperty: privateConfig.stringProperty,
  objectProperty: privateConfig.objectProperty
};

module.exports = config;