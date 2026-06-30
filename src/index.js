require("./vendor.js");
require("./style.scss");
const _ = require("lodash");
const run = require("./app/app.js");
const AlertService = require("./app/alert.service.js");
const CalculatorService = require("./app/calculator.service.js");
const JokesService = require("./app/jokes.service.js");

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);

console.log(_.toUpper("Hello from index.js"));
