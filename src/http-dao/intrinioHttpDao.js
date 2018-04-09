const config = require('../../config/config');
const baseHttpDao = require('./baseHttpDao');

module.exports.executeGet = function(path, callback) {
    var baseUrlIntrino = "https://api.intrinio.com";
    baseHttpDao.executeGetHttps(config.intrinio.user, config.intrinio.pass, baseUrlIntrino, path, callback);
};

module.exports.getCompanyInfo = function(ticker, callback) {
  this.executeGet("/companies?ticker=" + ticker, callback);
};

module.exports.getPrices = function(ticker, callback) {
    this.executeGet("/prices?ticker=" + ticker, callback);
};

module.exports.getDividendYield = function(ticker, callback) {
    this.executeGet("/data_point?ticker=" + ticker + "&item=trailing_dividend_yield", callback);
};

module.exports.queryForCompany = function(queryString, callback) {
    this.executeGet("/companies?query=" + queryString, callback);
};
