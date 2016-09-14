var wrapLog = function (callback, name) {

  var name = callback();

};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "letssum");

logSum(5,3); // letssum(5,3) => 8
logSum(3,2); // letssum(3,2) => 5
