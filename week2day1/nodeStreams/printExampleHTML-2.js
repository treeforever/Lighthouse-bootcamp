var request = require("request");
var fs = re

function printExampleHTML(callback) {
  request("http://www.google.com", function(err, response, data) {
    if (err) {
      throw err;
    }
  callback(data);
  });
}

printExampleHTML(function (data) {
    console.log("data:", data);
  });
