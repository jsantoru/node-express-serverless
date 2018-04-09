const intrinioHttpDao = require('../http-dao/intrinioHttpDao');

/**
 * http://docs.intrinio.com/#companies
 *
 * @param ticker
 * @param callback
 */
module.exports.getCompanyInfo = function(ticker, callback) {
    intrinioHttpDao.getCompanyInfo(ticker, function(err, data) {
        if(!err) {
            callback(null, data);
        }
        else {
            callback(err, data);
        }
    });
};

module.exports.getCurrentPrice = function(ticker, callback) {
    this.getPrices(ticker, function(err, data) {
        if(!err) {
            var current = data.data[0];
            var responseObject = {date: current.date, price:current.close};
            callback(null, responseObject);
        }
        else {
            callback(err, data);
        }
    });
};

module.exports.getPrices = function(ticker, callback) {
    intrinioHttpDao.getPrices(ticker, function(err, data) {
        if(!err) {
            callback(null, data);
        }
        else {
            callback(err, data);
        }
    });
};

module.exports.getDividendYield = function(ticker, callback) {
    intrinioHttpDao.getDividendYield(ticker, function(err, data) {
        if(!err) {
            var dividendPercent = data.value * 100;
            var responseObject = {ticker: data.identifier, dividendPercent:dividendPercent};

            callback(null, responseObject);
        }
        else {
            callback(err, data);
        }
    });
};

module.exports.queryForCompany = function(queryString, callback) {
    intrinioHttpDao.queryForCompany(queryString, function(err, data) {
        var companies = [];
        if(!err) {
            // build a simplified list of companies
            data.data.forEach(function(item) {
                // TODO: create domain objects
                var company = {
                    ticker: item.ticker,
                    name: item.name
                };
                companies.push(company);
            });

            callback(null, companies);
        }
        else {
            callback(err, data);
        }
    });
};
