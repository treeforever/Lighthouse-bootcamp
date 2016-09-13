var request = require("request");
var fs = require('fs');
require('dotenv').config();
var token = process.env.token;


function downloadImageByURL(url, filePath) {
  request(url).pipe(fs.createWriteStream(filePath));
}

function getAvatarUrl(err, contributors) {
  for (var i = 0; i < contributors.length; i++) {
    downloadImageByURL(contributors[i].avatar_url, `./images/${contributors[i].login}.png`);
  }
}

function githubRequest(endpoint, callback) {
  var requestData = {
    url: `http://api.github.com${endpoint}`,
    auth: {
      bearer: token
    },
    headers: {
      'User-Agent': "request"
    }
  };
  request.get(requestData, (error, response, body) => {
    if (error) {
      callback(error);
    }
    var jobj = JSON.parse(body);
    callback(null, jobj);
  });
}

function formUrl(repoOwner, repoName) {
  var contributorsUrl = "/repos/" + repoOwner + "/" + repoName + "/contributors";
  return contributorsUrl;
}

function getRepoContributors(repoOwner, repoName, callback) {
  var endpoint = formUrl(repoOwner, repoName);
  // "/repos/lighthouse-labs/laser_shark/contributors"
  githubRequest(endpoint, callback);
}

//test code
getRepoContributors(process.argv[2], process.argv[3], getAvatarUrl);



// request.get('http://api.github.com/repos/lighthouse-labs/laser_shark/contributors');
