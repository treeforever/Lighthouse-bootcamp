var request = require("request");
require('dotenv').config();
var token = process.env.token;

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
    var data = JSON.parse(body);
    callback(data);
  });
}

module.exports = {
  getRepoContributors: getRepoContributors,
  githubRequest: githubRequest
};
