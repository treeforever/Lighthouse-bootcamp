var request = require("request");
var fs = require('fs');
require('dotenv').config();
var token = process.env.token;
var download = require("./download_function");
var downloadAllAvatars = download.downloadAllAvatars;

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
  request.get(requestData, callback);
}

function getRepoContributors(repoOwner, repoName, callback) {
  githubRequest(`/repos/${repoOwner}/${repoName}/contributors`, (err, response, body) => {
    if (err) {
      throw new Error("Internet is down!");
    }

    //todo: change to status.code
    var data = JSON.parse(body);
    if (data.message === 'Not Found') {
      throw new Error('nonexisting owner or repo provided');
    } else if (data.message === 'Bad credentials') {
      throw new Error('Bad credentials');
    } else {
      callback(data);
    }
  });
}

if (!fs.existsSync('./.env')){
  throw new Error ("Don't have .env file");
}
if (process.argv.length !== 4) {
    throw new Error ("incorrect number of arguments");
  }
  getRepoContributors(process.argv[2], process.argv[3], downloadAllAvatars);
