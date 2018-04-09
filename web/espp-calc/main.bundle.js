webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#searchInput {\r\n  width:100%;\r\n}\r\n\r\nform {\r\n  width:75%;\r\n  text-align:center;\r\n  margin:auto;\r\n}\r\n\r\ninput {\r\n  font-family:FontAwesome,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav\r\n  (companySelectedEvent)=\"updateTicker($event)\"\r\n></app-nav>\r\n\r\n<!-- side by side -->\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"col-md-8\">\r\n    </div>\r\n  </div>\r\n</div>\r\n-->\r\n\r\n<div>\r\n  <div id=\"top\">\r\n    <app-input\r\n      [selectedTicker]=\"selectedTicker\"\r\n      (calculateEvent)=\"calculate($event)\"\r\n    ></app-input>\r\n  </div>\r\n  <div *ngIf=\"tableData != null\">\r\n    <app-content\r\n      [inputEntity]=\"inputEntity\"\r\n      [derivedValues]=\"derivedValues\"\r\n      [tableData]=\"tableData\"\r\n    ></app-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TableData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__derived_value_service__ = __webpack_require__("../../../../../src/app/derived-value.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(derivedValueService) {
        this.derivedValueService = derivedValueService;
        this.title = 'ESPP Calculator';
    }
    AppComponent.prototype.updateTicker = function (ticker) {
        console.log("TICKER", ticker);
        this.selectedTicker = ticker;
    };
    AppComponent.prototype.calculate = function (inputEntity) {
        console.log("INPUT ENTITY:", JSON.stringify(inputEntity));
        this.inputEntity = inputEntity;
        this.calculateDerivedValues(inputEntity);
        this.calculateTableData(inputEntity, this.derivedValues);
    };
    AppComponent.prototype.calculateDerivedValues = function (inputEntity) {
        console.log("calculating derived values");
        this.derivedValues = this.derivedValueService.calculateDerivedValues(inputEntity);
    };
    AppComponent.prototype.calculateTableData = function (inputEntity, derivedValues) {
        console.log("", derivedValues);
        var tableData = new TableData();
        // amounts
        tableData.purchase = derivedValues.discountPurchase;
        tableData.sell = derivedValues.sellAmount;
        tableData.dividend = derivedValues.dividendAmount;
        tableData.taxesOnEsppDiscount = derivedValues.taxesOnDiscount;
        tableData.taxesOnEarnings = derivedValues.taxOnEarnings;
        tableData.taxesOnDividend = derivedValues.taxOnDividend;
        tableData.fees = inputEntity.esppInputEntity.fees;
        // running totals
        tableData.purchaseRunningTotal = -1 * tableData.purchase;
        tableData.sellRunningTotal = tableData.sell + tableData.purchaseRunningTotal;
        tableData.dividendRunningTotal = tableData.dividend + tableData.sellRunningTotal;
        tableData.taxesOnEsppDiscountRunningTotal = -1 * tableData.taxesOnEsppDiscount + tableData.dividendRunningTotal;
        tableData.taxesOnEarningsRunningTotal = -1 * tableData.taxesOnEarnings + tableData.taxesOnEsppDiscountRunningTotal;
        tableData.taxesOnDividendRunningTotal = -1 * tableData.taxesOnDividend + tableData.taxesOnEarningsRunningTotal;
        tableData.feesRunningTotal = -1 * tableData.fees + tableData.taxesOnDividendRunningTotal;
        console.log(tableData.purchase, tableData.purchaseRunningTotal);
        console.log(tableData.sell, tableData.sellRunningTotal);
        console.log(tableData.dividend, tableData.dividendRunningTotal);
        console.log(tableData.taxesOnEsppDiscount, tableData.taxesOnEsppDiscountRunningTotal);
        console.log(tableData.taxesOnEarnings, tableData.taxesOnEarningsRunningTotal);
        console.log(tableData.taxesOnDividend, tableData.taxesOnDividendRunningTotal);
        console.log(tableData.fees, tableData.feesRunningTotal);
        this.tableData = tableData;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__derived_value_service__["a" /* DerivedValueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__derived_value_service__["a" /* DerivedValueService */]) === "function" && _a || Object])
], AppComponent);

var TableData = (function () {
    function TableData() {
    }
    return TableData;
}());

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ticker_ticker_component__ = __webpack_require__("../../../../../src/app/ticker/ticker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__espp_espp_component__ = __webpack_require__("../../../../../src/app/espp/espp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__personal_personal_component__ = __webpack_require__("../../../../../src/app/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__input_input_component__ = __webpack_require__("../../../../../src/app/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__derived_value_service__ = __webpack_require__("../../../../../src/app/derived-value.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__ticker_ticker_component__["b" /* TickerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__espp_espp_component__["a" /* EsppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__personal_personal_component__["a" /* PersonalComponent */],
            __WEBPACK_IMPORTED_MODULE_10__input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_11__content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_13__nav_nav_component__["a" /* NavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbTypeaheadModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__derived_value_service__["a" /* DerivedValueService */], __WEBPACK_IMPORTED_MODULE_13__nav_nav_component__["b" /* SearchService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#content {\r\n  width: 75%;\r\n  margin: 0 auto;\r\n\r\n  text-align: left;\r\n\r\n  border-style: solid;\r\n  border-width: 1px 0px 0px 0px;\r\n  border-color:lightgray;\r\n}\r\n\r\n.add {\r\n  color: green;\r\n}\r\n\r\n.subtract {\r\n  color: red;\r\n}\r\n\r\n.profitLabel {\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tableData?.purchase\">\r\n<div id=\"content\">\r\n  <h1 class=\"profitLabel\">Potential Profit <span class=\"badge badge-success\">{{tableData?.feesRunningTotal | currency:'USD':true:'1.2-2'}}</span></h1>\r\n  <br/>\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n    <tr>\r\n      <th>event</th>\r\n      <th>amount</th>\r\n      <th>running total</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n      <td>purchase</td>\r\n      <td class=\"subtract\">{{tableData?.purchase | currency:'USD':true:'1.2-2'}}</td>\r\n      <td>{{tableData?.purchaseRunningTotal | currency:'USD':true:'1.2-2'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>sell</td>\r\n      <td class=\"add\">{{tableData?.sell | currency:'USD':true:'1.2-2'}}</td>\r\n      <td>{{tableData?.sellRunningTotal | currency:'USD':true:'1.2-2'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>dividend</td>\r\n      <td class=\"add\">{{tableData?.dividend | currency:'USD':true:'1.2-2'}}</td>\r\n      <td>{{tableData?.dividendRunningTotal | currency:'USD':true:'1.2-2'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>taxes on espp discount</td>\r\n      <td class=\"subtract\">{{tableData?.taxesOnEsppDiscount| currency:'USD':true:'1.2-2'}}</td>\r\n      <td>{{tableData?.taxesOnEsppDiscountRunningTotal | currency:'USD':true:'1.2-2'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>taxes on earnings</td>\r\n      <td class=\"subtract\">{{tableData?.taxesOnEarnings | currency:'USD':true:'1.2-2'}}</td>\r\n      <td>{{tableData?.taxesOnEarningsRunningTotal | currency:'USD':true:'1.2-2'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>taxes on dividend</td>\r\n      <td class=\"subtract\">{{tableData?.taxesOnDividend | currency:'USD':true:'1.2-2'}}</td>\r\n      <td>{{tableData?.taxesOnDividendRunningTotal | currency:'USD':true:'1.2-2'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>fees</td>\r\n      <td class=\"subtract\">{{tableData?.fees | currency:'USD':true:'1.2-2'}}</td>\r\n      <td>{{tableData?.feesRunningTotal | currency:'USD':true:'1.2-2'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>potential profit</b></td>\r\n      <td></td>\r\n      <td><b>{{tableData?.feesRunningTotal | currency:'USD':true:'1.2-2'}}</b></td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <!--\r\n  <h2>CONTENT COMPONENT</h2>\r\n  <h3>Input:</h3>\r\n  <pre>{{inputEntity | json}}</pre>\r\n\r\n  <h3>Derived Values</h3>\r\n  <pre>{{derivedValues | json}}</pre>\r\n\r\n  <h3>TableData</h3>\r\n  <pre>{{tableData | json}}</pre>\r\n  -->\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_input_component__ = __webpack_require__("../../../../../src/app/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__derived_value_service__ = __webpack_require__("../../../../../src/app/derived-value.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponent = (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    return ContentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__input_input_component__["b" /* InputEntity */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__input_input_component__["b" /* InputEntity */]) === "function" && _a || Object)
], ContentComponent.prototype, "inputEntity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__derived_value_service__["b" /* DerivedValues */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__derived_value_service__["b" /* DerivedValues */]) === "function" && _b || Object)
], ContentComponent.prototype, "derivedValues", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* TableData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* TableData */]) === "function" && _c || Object)
], ContentComponent.prototype, "tableData", void 0);
ContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__("../../../../../src/app/content/content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/content.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContentComponent);

var _a, _b, _c;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ "../../../../../src/app/derived-value.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DerivedValueService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DerivedValues; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DerivedValueService = (function () {
    function DerivedValueService() {
    }
    DerivedValueService.prototype.calculateDerivedValues = function (inputEntity) {
        var derivedValues = new DerivedValues();
        // amount to contribute = salary * contrPercent / (12 / holding period)
        derivedValues.amountToContribute = this.calculateAmountToContribute(inputEntity, derivedValues);
        derivedValues.discountSharePrice = this.calculateDiscountSharePrice(inputEntity, derivedValues);
        derivedValues.numShares = this.calculateNumShares(inputEntity, derivedValues);
        derivedValues.regularPurchase = this.calculateRegularPurchase(inputEntity, derivedValues);
        derivedValues.discountPurchase = this.calculateDiscountPurchase(inputEntity, derivedValues);
        derivedValues.discount = this.calculateDiscount(inputEntity, derivedValues);
        derivedValues.taxesOnDiscount = this.calculateTaxesOnDiscount(inputEntity, derivedValues);
        derivedValues.sharePriceAtSell = this.calculateSharePriceAtSell(inputEntity, derivedValues);
        derivedValues.sellAmount = this.calculateSellAmount(inputEntity, derivedValues);
        derivedValues.earningsOverRegularPurchase = this.calculateEarningsOverRegularPurchase(inputEntity, derivedValues);
        derivedValues.taxOnEarnings = this.calculateTaxOnEarnings(inputEntity, derivedValues);
        derivedValues.dividendAmount = this.calculateDividendAmount(inputEntity, derivedValues);
        derivedValues.taxOnDividend = this.calculateTaxOnDividend(inputEntity, derivedValues);
        this.logDerivedValues(derivedValues);
        return derivedValues;
    };
    DerivedValueService.prototype.logDerivedValues = function (derivedValues) {
        console.log(derivedValues.amountToContribute);
        console.log(derivedValues.discountSharePrice);
    };
    DerivedValueService.prototype.calculateAmountToContribute = function (inputEntity, derivedValues) {
        return inputEntity.personalInputEntity.salary * inputEntity.personalInputEntity.contributionPercent / 100 /
            (12 / inputEntity.esppInputEntity.holdingPeriodMonths);
    };
    DerivedValueService.prototype.calculateDiscountSharePrice = function (inputEntity, derivedValues) {
        return inputEntity.companyInputEntity.value - (inputEntity.companyInputEntity.value * inputEntity.esppInputEntity.discount / 100);
    };
    DerivedValueService.prototype.calculateNumShares = function (inputEntity, derivedValues) {
        return derivedValues.amountToContribute / derivedValues.discountSharePrice;
    };
    DerivedValueService.prototype.calculateRegularPurchase = function (inputEntity, derivedValues) {
        return derivedValues.numShares * inputEntity.companyInputEntity.value;
    };
    DerivedValueService.prototype.calculateDiscountPurchase = function (inputEntity, derivedValues) {
        return derivedValues.numShares * derivedValues.discountSharePrice;
    };
    DerivedValueService.prototype.calculateDiscount = function (inputEntity, derivedValues) {
        return derivedValues.regularPurchase - derivedValues.discountPurchase;
    };
    DerivedValueService.prototype.calculateTaxesOnDiscount = function (inputEntity, derivedValues) {
        return derivedValues.discount * inputEntity.personalInputEntity.marginalTaxBracket / 100;
    };
    DerivedValueService.prototype.calculateSharePriceAtSell = function (inputEntity, derivedValues) {
        // TODO: make projected performance an input property under company info
        var projectedPerformancePercent = 0;
        return inputEntity.companyInputEntity.value + (inputEntity.companyInputEntity.value * projectedPerformancePercent / 100);
    };
    DerivedValueService.prototype.calculateSellAmount = function (inputEntity, derivedValues) {
        return derivedValues.sharePriceAtSell * derivedValues.numShares;
    };
    DerivedValueService.prototype.calculateEarningsOverRegularPurchase = function (inputEntity, derivedValues) {
        return derivedValues.sellAmount - derivedValues.regularPurchase;
    };
    DerivedValueService.prototype.calculateTaxOnEarnings = function (inputEntity, derivedValues) {
        return derivedValues.earningsOverRegularPurchase * inputEntity.personalInputEntity.marginalTaxBracket / 100;
    };
    DerivedValueService.prototype.calculateDividendAmount = function (inputEntity, derivedValues) {
        return (derivedValues.sellAmount * inputEntity.companyInputEntity.dividend / 100) /
            (12 / inputEntity.esppInputEntity.holdingPeriodMonths);
    };
    DerivedValueService.prototype.calculateTaxOnDividend = function (inputEntity, derivedValues) {
        return derivedValues.dividendAmount * inputEntity.personalInputEntity.marginalTaxBracket / 100;
    };
    return DerivedValueService;
}());
DerivedValueService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DerivedValueService);

var DerivedValues = (function () {
    function DerivedValues() {
    }
    return DerivedValues;
}());

//# sourceMappingURL=derived-value.service.js.map

/***/ }),

/***/ "../../../../../src/app/espp/espp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group input {\r\n  width: 100%;\r\n}\r\n\r\n.input-group {\r\n  padding-bottom:15px;\r\n}\r\n\r\n.card {\r\n  margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/espp/espp.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<md-card id=\"espp-info-card\" class=\"input-card\">\r\n  <md-card-header>\r\n    <div md-card-avatar class=\"example-header-image\"><i class=\"material-icons\">star_border</i></div>\r\n    <md-card-title>ESPP Info</md-card-title>\r\n    <!--<md-card-subtitle>Some ESPP text</md-card-subtitle>\r\n  </md-card-header>\r\n  <!--<img md-card-image src=\"assets/img/examples/shiba2.jpg\">\r\n  <md-card-content>\r\n    <md-input-container>\r\n      <!-- TODO: how to do two-way bind and still have %, $, etc? -->\r\n      <!-- sample two-way binding: <input mdInput [(ngModel)]=\"companyInputEntity.ticker\" placeholder=\"Ticker\" value=\"\" (focusout)=\"lookupCompanyInfo()\">\r\n      <input mdInput placeholder=\"Discount\" value=\"{{esppInputEntity?.discount}}%\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Holding Period (months)\" value=\"{{esppInputEntity?.holdingPeriodMonths}}\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Fees\" value=\"${{esppInputEntity?.fees}}\">\r\n    </md-input-container>\r\n  </md-card-content>\r\n  <!--<md-card-actions>\r\n    <button md-button>LIKE</button>\r\n    <button md-button>SHARE</button>\r\n  </md-card-actions>\r\n</md-card>\r\n-->\r\n\r\n<div class=\"card\" style=\"width: 20rem;\">\r\n  <img class=\"card-img-top\" src=\"assets/images/espp.jpg\" alt=\"Card image cap\" style=\"width:20rem;height:13rem;\">\r\n  <div class=\"card-body\">\r\n    <p class=\"card-text\">Enter ESPP info</p>\r\n    <label><b>Discount</b></label>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">%</span>\r\n      <input mdInput [(ngModel)]=\"esppInputEntity.discount\" placeholder=\"Discount\">\r\n    </div>\r\n    <label><b>Holding Period (Months)</b></label>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">_</span>\r\n      <input mdInput [(ngModel)]=\"esppInputEntity.holdingPeriodMonths\" placeholder=\"Holding Period (months)\">\r\n    </div>\r\n    <label><b>Fees</b></label>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">$</span>\r\n      <input mdInput [(ngModel)]=\"esppInputEntity.fees\" placeholder=\"Fees\">\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/espp/espp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EsppInputEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EsppComponent = (function () {
    function EsppComponent() {
        this.esppInputEntity = new EsppInputEntity();
        this.esppInputEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // set defaults
        this.esppInputEntity.discount = 15;
        this.esppInputEntity.holdingPeriodMonths = 3;
        this.esppInputEntity.fees = 35;
    }
    EsppComponent.prototype.ngOnInit = function () {
        // send out what the current espp values are
        this.esppInputEvent.emit(this.esppInputEntity);
    };
    EsppComponent.prototype.ngDoCheck = function () {
        // send out what the current espp values are
        this.esppInputEvent.emit(this.esppInputEntity);
    };
    return EsppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], EsppComponent.prototype, "esppInputEvent", void 0);
EsppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-espp',
        template: __webpack_require__("../../../../../src/app/espp/espp.component.html"),
        styles: [__webpack_require__("../../../../../src/app/espp/espp.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EsppComponent);

var EsppInputEntity = (function () {
    function EsppInputEntity() {
    }
    return EsppInputEntity;
}());

//# sourceMappingURL=espp.component.js.map

/***/ }),

/***/ "../../../../../src/app/input/input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#inputDiv {\r\n  margin: auto;\r\n  width: 75%;\r\n  padding: 10px;\r\n}\r\n\r\n#calcButtonDiv {\r\n  margin: auto;\r\n  padding: 10px;\r\n}\r\n\r\n.section {\r\n  margin: auto;\r\n  width:100%;\r\n}\r\n\r\n#collapseInputDiv {\r\n  padding: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<md-sidenav-container class=\"example-container\" fullscreen>\r\n  <md-sidenav #sidenav class=\"example-sidenav\" opened=\"true\">\r\n    <app-ticker\r\n      (lookupPriceEvent)=\"onLookupStockPriceEvent($event)\"\r\n      (lookupDividendEvent)=\"onLookupDividendEvent($event)\">\r\n    </app-ticker>\r\n    <app-espp\r\n      (esppInputEvent)=\"onEsppInputEvent($event)\">\r\n    </app-espp>\r\n    <app-personal\r\n      (personalInputEvent)=\"onPersonalInputEvent($event)\">\r\n    </app-personal>\r\n    <button md-button (click)=\"onClickCalculate()\">CALCULATE</button>\r\n  </md-sidenav>\r\n\r\n  <div class=\"example-sidenav-content\">\r\n    <button type=\"button\" md-button (click)=\"sidenav.open()\">\r\n      Open sidenav\r\n    </button>\r\n  </div>\r\n\r\n</md-sidenav-container>\r\n-->\r\n<div id=\"outerOuterInputDiv\">\r\n  <div id=\"outerInputDiv\" class=\"collapse show\">\r\n    <div id=\"inputDiv\" class=\"row row-list\">\r\n      <div class=\"col-lg-4\">\r\n        <app-ticker\r\n          [companyTicker]=\"selectedTicker\"\r\n          (lookupPriceEvent)=\"onLookupStockPriceEvent($event)\"\r\n          (lookupDividendEvent)=\"onLookupDividendEvent($event)\">\r\n        </app-ticker>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <app-espp\r\n          (esppInputEvent)=\"onEsppInputEvent($event)\">\r\n        </app-espp>\r\n      </div>\r\n      <div class=\"col-lg-4\" style=\"text-align: center;\">\r\n        <app-personal\r\n          (personalInputEvent)=\"onPersonalInputEvent($event)\">\r\n        </app-personal>\r\n        <div id=\"calcButtonDiv\">\r\n          <button (click)=\"onClickCalculate()\" class=\"btn btn-default\">Calculate</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InputEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__espp_espp_component__ = __webpack_require__("../../../../../src/app/espp/espp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_personal_component__ = __webpack_require__("../../../../../src/app/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticker_ticker_component__ = __webpack_require__("../../../../../src/app/ticker/ticker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputComponent = (function () {
    function InputComponent() {
        this.calculateEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.inputEntity = new InputEntity();
    }
    Object.defineProperty(InputComponent.prototype, "selectedTicker", {
        get: function () {
            return this._selectedTicker;
        },
        set: function (ticker) {
            console.log("InputComponent:", ticker);
            this._selectedTicker = ticker;
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.onLookupStockPriceEvent = function (stockPrice) {
        console.log("STOCK PRICE:", stockPrice);
        this.inputEntity.companyInputEntity.value = stockPrice;
        this.onClickCalculate();
    };
    InputComponent.prototype.onLookupDividendEvent = function (dividend) {
        console.log("DIVIDEND:", dividend);
        this.inputEntity.companyInputEntity.dividend = dividend;
        this.onClickCalculate();
    };
    InputComponent.prototype.onClickCalculate = function () {
        console.log("on click calculate");
        this.calculateEvent.emit(this.inputEntity);
    };
    InputComponent.prototype.onEsppInputEvent = function (esppInputEntity) {
        this.inputEntity.esppInputEntity = esppInputEntity;
        console.log("On espp input event", esppInputEntity);
        this.onClickCalculate();
    };
    InputComponent.prototype.onPersonalInputEvent = function (personalInputEntity) {
        this.inputEntity.personalInputEntity = personalInputEntity;
        console.log("on personal input event", personalInputEntity);
        this.onClickCalculate();
    };
    return InputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], InputComponent.prototype, "calculateEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], InputComponent.prototype, "selectedTicker", null);
InputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-input',
        template: __webpack_require__("../../../../../src/app/input/input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/input/input.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], InputComponent);

var InputEntity = (function () {
    function InputEntity() {
        this.companyInputEntity = new __WEBPACK_IMPORTED_MODULE_3__ticker_ticker_component__["a" /* CompanyInputEntity */]();
        this.esppInputEntity = new __WEBPACK_IMPORTED_MODULE_1__espp_espp_component__["b" /* EsppInputEntity */]();
        this.personalInputEntity = new __WEBPACK_IMPORTED_MODULE_2__personal_personal_component__["b" /* PersonalInputEntity */]();
    }
    return InputEntity;
}());

//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#searchInput {\r\n  width:100%;\r\n}\r\n\r\nform {\r\n  width:75%;\r\n  text-align:center;\r\n  margin:auto;\r\n}\r\n\r\ninput {\r\n  font-family:FontAwesome,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <form class=\"form-inline my-2 my-lg-0 mr-auto\">\r\n      <!-- https://ng-bootstrap.github.io/#/components/typeahead/examples -->\r\n      <input #searchInput\r\n             id=\"searchInput\"\r\n             class=\"form-control mr-sm-2\"\r\n             type=\"text\"\r\n             placeholder=\"&#xF002;  Search for company\"\r\n             aria-label=\"Search for company\"\r\n             name=\"companyNameInput\"\r\n             [(ngModel)]=\"companyName\"\r\n             [ngbTypeahead]=\"search\"\r\n      >\r\n    </form>\r\n\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" aria-expanded=\"true\"\r\n           data-target=\"#outerInputDiv\">Show/Hide Input</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CompanySearchResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_merge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CompanySearchResult = (function () {
    function CompanySearchResult() {
    }
    return CompanySearchResult;
}());

var SearchService = (function () {
    function SearchService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Execute a company search by making an http call to the jnab-backend.
     * @param companySearchValue
     * @returns Observable<CompanySearchResult[]>
     */
    SearchService.prototype.executeCompanySearch = function (companySearchValue) {
        console.log("company search value:", companySearchValue);
        var url = '/api/espp-calc/stock/query?query=' + companySearchValue + "&apikey=demo";
        // only execute the search if we have a search term
        if (companySearchValue && companySearchValue.length > 2) {
            return this.httpClient.get(url).map(
            // data is an array of objects {"name":"Thomson Reuters", "ticker":"TRI"}
            function (data) {
                console.log("Search Results:", data);
                return data;
            }, function (err) {
                console.error("ERROR:", err);
                // just return an empty array if there's an error
                return [];
            });
        }
        var noResults = [];
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(noResults);
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], SearchService);

var NavComponent = (function () {
    function NavComponent(searchService) {
        this.searchService = searchService;
        this.title = 'ESPP Calculator';
        this.companySelectedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // this is to avoid searchService being unavailable in the observable below
        // https://www.bountysource.com/issues/38514817-typeahead-this-is-undefined
        this.search = this.search.bind(this);
    }
    Object.defineProperty(NavComponent.prototype, "companyName", {
        get: function () {
            return this._companyName;
        },
        set: function (companyName) {
            this._companyName = companyName;
            // if we have an open parenthesis, assume the ticker is in parens (for now) TODO: use regex
            if (companyName && companyName.indexOf("(") > 0) {
                console.log("GOT A COMPANY:", companyName);
                // TODO: fire an event and set the company ticker value
                var ticker = this.parseTicker(companyName);
                console.log("TICKER:", ticker);
                this.companySelectedEvent.emit(ticker);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Parse the ticker from a company name.
     *
     * Thomson Reuters (TRI)
     *
     * @param companyName
     * @returns {string}
     */
    NavComponent.prototype.parseTicker = function (companyName) {
        if (companyName) {
            var tickerIndex = companyName.search(new RegExp('\\(.*\\)$'));
            if (tickerIndex > -1) {
                return companyName.substring(tickerIndex).replace("(", "").replace(")", "");
            }
        }
    };
    NavComponent.prototype.ngOnInit = function () {
    };
    /**
     * Execute a search that's connected to a typeahead input in the UI.
     * @param text$
     * @returns {Observable<string[]>}
     */
    NavComponent.prototype.search = function (text$) {
        var _this = this;
        return text$
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(function (term) {
            // can we make the ajax call here? need a callback?
            return _this.searchService.executeCompanySearch(term);
        })
            .map(function (searchResults) {
            var companyNames = [];
            searchResults.forEach(function (companySearchResult) {
                companyNames.push(_this.buildCompanySearchResultString(companySearchResult));
            });
            // return the first 10 company names
            // this is what the ui component needs
            return companyNames.slice(0, 10);
        });
    };
    ;
    NavComponent.prototype.buildCompanySearchResultString = function (companySearchResult) {
        var tickerString = companySearchResult.ticker ? " (" + companySearchResult.ticker + ")" : "";
        return companySearchResult.name + tickerString;
    };
    return NavComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], NavComponent.prototype, "companySelectedEvent", void 0);
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [SearchService])
], NavComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/personal/personal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group input {\r\n  width: 100%;\r\n}\r\n\r\n.input-group {\r\n  padding-bottom:15px;\r\n}\r\n\r\n.card {\r\n  margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/personal/personal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<md-card id=\"personal-info-card\" class=\"input-card\">\r\n  <md-card-header>\r\n    <div md-card-avatar class=\"example-header-image\"><i class=\"material-icons\">person</i></div>\r\n    <md-card-title>Personal Info</md-card-title>\r\n    <!--<md-card-subtitle>Dog Breed</md-card-subtitle>\r\n  </md-card-header>\r\n  <!--<img md-card-image src=\"assets/img/examples/shiba2.jpg\">\r\n  <md-card-content>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Salary\" value=\"${{personalInputEntity.salary}}\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Contribution %\" value=\"{{personalInputEntity.contributionPercent}}%\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Marginal Tax Bracket\" value=\"{{personalInputEntity.marginalTaxBracket}}%\">\r\n    </md-input-container>\r\n  </md-card-content>\r\n  <md-card-actions>\r\n    <button md-button>LIKE</button>\r\n    <button md-button>SHARE</button>\r\n  </md-card-actions>\r\n</md-card>\r\n-->\r\n\r\n<div class=\"card\" style=\"width: 20rem;\">\r\n  <img class=\"card-img-top\" src=\"assets/images/personal-salary2.jpg\" alt=\"Card image cap\" style=\"width:20rem;height:13rem;\">\r\n  <div class=\"card-body\">\r\n    <p class=\"card-text\">Enter Personal Info</p>\r\n    <label><b>Salary</b></label>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">$</span>\r\n      <input mdInput [(ngModel)]=\"personalInputEntity.salary\" placeholder=\"Salary\">\r\n    </div>\r\n    <label><b>Contribution %</b></label>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">%</span>\r\n      <input mdInput [(ngModel)]=\"personalInputEntity.contributionPercent\" placeholder=\"Contribution %\">\r\n    </div>\r\n    <label><b>Marginal Tax Bracket</b></label>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">%</span>\r\n      <input mdInput [(ngModel)]=\"personalInputEntity.marginalTaxBracket\" placeholder=\"Marginal Tax Bracket\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/personal/personal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PersonalInputEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalComponent = (function () {
    function PersonalComponent() {
        this.personalInputEntity = new PersonalInputEntity();
        this.personalInputEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.personalInputEntity.salary = 100000;
        this.personalInputEntity.contributionPercent = 10;
        this.personalInputEntity.marginalTaxBracket = 25;
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.personalInputEvent.emit(this.personalInputEntity);
    };
    PersonalComponent.prototype.ngDoCheck = function () {
        this.personalInputEvent.emit(this.personalInputEntity);
    };
    return PersonalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], PersonalComponent.prototype, "personalInputEvent", void 0);
PersonalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-personal',
        template: __webpack_require__("../../../../../src/app/personal/personal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/personal/personal.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], PersonalComponent);

var PersonalInputEntity = (function () {
    function PersonalInputEntity() {
    }
    return PersonalInputEntity;
}());

//# sourceMappingURL=personal.component.js.map

/***/ }),

/***/ "../../../../../src/app/ticker/ticker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group input {\r\n  width: 100%;\r\n}\r\n\r\n.input-group {\r\n  padding-bottom:15px;\r\n}\r\n\r\n.card {\r\n  margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ticker/ticker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 20rem;\">\r\n  <img class=\"card-img-top\" src=\"assets/images/company-info.png\" alt=\"Card image cap\" style=\"width:20rem;height:13rem;\">\r\n  <div class=\"card-body\">\r\n    <p class=\"card-text\">Enter Company Name or Ticker</p>\r\n    <label><b>Company Ticker</b></label>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">_</span>\r\n      <input mdInput [(ngModel)]=\"companyInputEntity.ticker\" placeholder=\"Ticker\" value=\"XYZ\" (focusout)=\"lookupCompanyInfo()\">\r\n    </div>\r\n    <label><b>Stock Price</b></label>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">$</span>\r\n      <input mdInput readonly placeholder=\"Value\" value=\"{{companyInputEntity.value}}\">\r\n    </div>\r\n    <label><b>Annual Dividend Yield</b></label>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">%</span>\r\n      <input mdInput readonly placeholder=\"Dividend\" value=\"{{companyInputEntity.dividend}}\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ticker/ticker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyInputEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TickerComponent = (function () {
    function TickerComponent(httpClient) {
        this.httpClient = httpClient;
        this.companyInputEntity = new CompanyInputEntity();
        this.lookupPriceEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.lookupDividendEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.blah1 = "67.240";
        this.blah2 = "241.124";
        this.blah = "localhost"; //this.blah1 + "." + this.blah2;
    }
    TickerComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TickerComponent.prototype, "companyTicker", {
        set: function (ticker) {
            console.log("TickerComponent:", ticker);
            this.companyInputEntity.ticker = ticker;
            this.lookupCompanyInfo();
        },
        enumerable: true,
        configurable: true
    });
    TickerComponent.prototype.lookupCompanyInfo = function () {
        this.lookupPrice();
        this.lookupDividend();
    };
    TickerComponent.prototype.lookupPrice = function () {
        var _this = this;
        console.log("looking up ticker:", this.companyInputEntity.ticker);
        var tickerUpper = (this.companyInputEntity.ticker) ? this.companyInputEntity.ticker.toUpperCase() : this.companyInputEntity.ticker;
        var url = '/api/espp-calc/stock/price?ticker=' + tickerUpper + "&apikey=demo";
        console.log(url);
        // get the current value of the ticker
        this.httpClient.get(url).subscribe(
        // currently the response data is JUST the value
        function (data) {
            console.log("RESPONSE:", data);
            _this.companyInputEntity.value = data['price'];
            // fire the event now that we have a new value
            _this.lookupPriceEvent.emit(_this.companyInputEntity.value);
        }, function (err) {
            console.log("ERROR:", err);
        });
    };
    TickerComponent.prototype.lookupDividend = function () {
        var _this = this;
        console.log("looking up dividend:", this.companyInputEntity.ticker);
        var tickerUpper = (this.companyInputEntity.ticker) ? this.companyInputEntity.ticker.toUpperCase() : this.companyInputEntity.ticker;
        var url = '/api/espp-calc/stock/dividend?ticker=' + tickerUpper + "&apikey=demo";
        // get the current value of the ticker
        this.httpClient.get(url).subscribe(
        // currently the response data is JUST the value
        function (data) {
            console.log("RESPONSE:", data);
            _this.companyInputEntity.dividend = data['dividendPercent'];
            _this.lookupDividendEvent.emit(_this.companyInputEntity.dividend);
        }, function (err) {
            console.log("ERROR:", err);
        });
    };
    return TickerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], TickerComponent.prototype, "lookupPriceEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], TickerComponent.prototype, "lookupDividendEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TickerComponent.prototype, "companyTicker", null);
TickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-ticker',
        template: __webpack_require__("../../../../../src/app/ticker/ticker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ticker/ticker.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], TickerComponent);

var CompanyInputEntity = (function () {
    function CompanyInputEntity() {
    }
    return CompanyInputEntity;
}());

var _a;
//# sourceMappingURL=ticker.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map