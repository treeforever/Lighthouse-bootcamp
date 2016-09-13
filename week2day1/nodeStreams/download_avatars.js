var request = require("request");
var fs = require('fs');
var contributorList = require("./getRepoContributors");
var getRepoContributors = contributorList.getRepoContributors;

function downloadImageByURL(url, filePath) {
  request(url).pipe(fs.createWriteStream(filePath));
}

function downloadAllAvatars(contributors) {
    contributors.forEach(function(person) {
      downloadImageByURL(person.avatar_url, `./images/${person.login}.png`);
    });
}

getRepoContributors(process.argv[2], process.argv[3], function(data){
  downloadAllAvatars(data);
});
