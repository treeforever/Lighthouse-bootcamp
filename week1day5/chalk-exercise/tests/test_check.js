var assert = require("chai").assert;
// var isCheck = require("../lib/check.check");
var isFiltered = require("../lib/check").filteredNum;
var sum = require("../lib/check").sum;
var isLeft = require("../lib/check").printLeftNums;

// describe("check", function() {
//   it("should return true if a number is valid based on the Luhn Algorithm", function() {
//     assert.isTrue(result);
//   });
// });

describe("isFiltered", function() {
  it("should return true if odd index numbers are filtered into a new array", function() {
    var num = "79927398713";
    var numArr = num.split("");
    var reNum = numArr.reverse();
    var result = isFiltered(reNum);
    assert.isTrue(result);
  });
});

describe("sum", function(){
  it("should return true if sum works", function () {
    var result = sum([1, 8, 3, 2, 9]);
    assert.isTrue(result);
  });

});

describe("isLeft", function() {
  it("should return true if even index numbers are filtered into a new array", function() {
    var num = "79927398713";
    var numArr = num.split("");
    var reNum = numArr.reverse();
    var result = isLeft(reNum);
    assert.isTrue(result);
  });
});
