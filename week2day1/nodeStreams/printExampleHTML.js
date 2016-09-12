var http = require("http");
var requestOptions = {
  host: "wordpress.com",
  path: "/"
};


function printExampleHTML(_onData) {
  http.get(requestOptions, function(response) {

    response.setEncoding("utf8");             // Use UTF-8 encoding

    response.on("data", _onData);

    response.on("end", function() {                // On Data Completed
      console.log("Response stream complete.");
    });
  });
}

printExampleHTML(function (data) {
  console.log(data);
});
