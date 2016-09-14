var request = require("request");
var fs = require('fs');
require('dotenv').config();
var token = process.env.token;
var _ = require("underscore");

function githubRequest(urlLink, callback) {
  var requestData = {
    url: urlLink,
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
  githubRequest(`http://api.github.com/repos/${repoOwner}/${repoName}/contributors`, (err, response, body) => {
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

function getStarredURL(contributors, callback) {
  var count = 0;
  var repos = {};

  contributors.forEach(retrieveAndCountNext);

  function retrieveAndCountNext(person) {
    var starred_url = `https://api.github.com/users/${person.login}/starred`;

    githubRequest(starred_url, (err, response, body) => {
      var data = JSON.parse(body);

      data.forEach(function (repo) {
        if (!repos.hasOwnProperty(repo.full_name)){
          repos[repo.full_name] = 1;
        }else{
          repos[repo.full_name] += 1;
        }
      });

      count++;

      if(count === contributors.length) {
        var starredURLList = _.map(repos, function (count, key) {
          return {name: key, count: count};
        });
        var sortedList = _.sortBy(starredURLList, 'count').reverse();
        callback(sortedList);
      }
    });
  }
}

function uniqueStarUrl(data){
  data.forEach(function (repo) {
    if (!repos.hasOwnProperty(repo.full_name)){
      repos[repo.full_name] = 1;
    }else{
      repos[repo.full_name] += 1;
    }
  });
  console.log(repos);
}

getRepoContributors(process.argv[2], process.argv[3], function(contributors) {
  getStarredURL(contributors, function(list) {
    for (var i = 0; i < 5; i++) {
      console.log(`[${list[i].count} stars] ${list[i].name}`);
    }
  });
});
