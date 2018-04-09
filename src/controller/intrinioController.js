const intrinioService = require('../service/intrinioService');

module.exports.retrieveStockInfo = function(ticker, res) {
    console.log(ticker);

    intrinioService.getCompanyInfo(ticker, function(err, data) {
        res.send(data);
    });
};

module.exports.retrieveCurrentPrice = function(ticker, res) {
    console.log(ticker);

    intrinioService.getCurrentPrice(ticker, function(err, data) {
        res.send(data);
    });
};

module.exports.retrievePrices = function(ticker, res) {
    console.log(ticker);

    intrinioService.getPrices(ticker, function(err, data) {
        res.send(data);
    });
};

module.exports.retrieveDividendYield = function(ticker, res) {
    console.log(ticker);

    intrinioService.getDividendYield(ticker, function(err, data) {
        res.send(data);
    });
};

module.exports.queryForCompany = function(queryString, res) {
    console.log(queryString);

    intrinioService.queryForCompany(queryString, function(err, data) {
        res.send(data);
    });
};