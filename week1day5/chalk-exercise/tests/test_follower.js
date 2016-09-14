var assert = require("chai").assert;
var isList = require("../lib/follower").list;
var findFollowers = require("../lib/follower").findFollowers;
var data = require("../lib/follower").data;
var _ = require("underscore");
// describe("isList", function() {
//   it("should return true if everyone and their followers and followees are listed", function() {
//     var user = "f01";
//     var result = isList(user);
//     assert.isTrue(result);
//   });
//
//   it("should return true if everyone and their followers and followees are listed", function() {
//     var user = "f02";
//     var result = isList(user);
//     assert.isTrue(result);
//   });
//
//   it("should return true if everyone and their followers and followees are listed", function() {
//     var user = "";
//     var result = isList(user);
//     assert.isTrue(result);
//   });
// });

describe("findFollowers", function() {
  it("should return true if one user's followers all get printed out", function() {
    var user = "f01";
    var library = data;
    var result = findFollowers(user, library);
    var comparison = _.isEqual(result, [ 'f03', 'f04' ])
    // console.log('result is', result)
    // console.log(result === ['f03','f04'])
    assert.isTrue(comparison);
  });

  it("should return true if everyone and their followers and followees are listed", function() {
    var user = "f02";
    var library = data;
    var result = findFollowers(user, library);
    assert.isTrue(result === ['f01', 'f04']);
  });

  it("should return true if everyone and their followers and followees are listed", function() {
    var user = "f03";
    var library = data;
    var result = findFollowers(user, library);
    assert.isTrue(result === ['f01', 'f04']);
  });
});
