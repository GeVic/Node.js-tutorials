var url = require('url');
var address = 'http://localhost:8080/operationTest.htm?year=2017&month=february';
var query = url.parse(address, true);

console.log(query.hostname); // returns 'localhost:8080'
console.log(query.pathname); // returns '/operationTest.htm'
console.log(query.search); // returns '?year=2017&month=february'

var queryData = query.query; // returns an object { year: 2017, month: 'february' }
console.log(queryData.month); // returns 'february'
