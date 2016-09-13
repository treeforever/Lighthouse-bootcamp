var request = require("request");
var fs = require('fs');

function downloadImageByURL(url, filePath) {
  request(url).pipe(fs.createWriteStream(filePath));
}

function downloadAllAvatars(contributors) {
  if(!fs.existsSync('./images/')) {
    fs.mkdir('images');
  }
    contributors.forEach(function(person) {
      downloadImageByURL(person.avatar_url, `./images/${person.login}.png`);
    });

}

module.exports = {
  downloadImageByURL: downloadImageByURL,
  downloadAllAvatars: downloadAllAvatars
};
