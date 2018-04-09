const express = require('express');
const intrinioController = require('./controller/intrinioController');
const router = express.Router();

router.route('/test/:id').get( (req, res) => {
  let id = req.params.id;
  console.log(id);

  res.set('Content-Type', 'application/json');
  res.send({"id":id});
});


// espp-calc

// http://localhost:8080/stock/info?ticker=AAPL
router.route('/espp-calc/stock/info').get(function(req, res) {
  var ticker = req.query.ticker;
  intrinioController.retrieveStockInfo(ticker, res);
});

// http://localhost:8080/stock/price?ticker=AAPL
router.route('/espp-calc/stock/price').get(function(req, res) {
  var ticker = req.query.ticker;
  intrinioController.retrieveCurrentPrice(ticker, res);
});

// http://localhost:8080/stock/prices?ticker=AAPL
router.route('/espp-calc/stock/prices').get(function(req, res) {
  var ticker = req.query.ticker;
  intrinioController.retrievePrices(ticker, res);
});

// http://localhost:8080/stock/dividend?ticker=AAPL
router.route('/espp-calc/stock/dividend').get(function(req, res) {
  var ticker = req.query.ticker;
  intrinioController.retrieveDividendYield(ticker, res);
});

// http://localhost:8080/stock/query?query=Thom
router.route('/espp-calc/stock/query').get(function(req, res) {
  var queryString = req.query.query;
  intrinioController.queryForCompany(queryString, res);
});


module.exports = router;
