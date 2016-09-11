var _ = require("underscore");

var data =
  {"f01": {name: "Alice",
           age: 15,
           follows: ["f02", "f03", "f04"]},
   "f02": {name: "Bob",
           age: 20,
           follows: ["f05", "f06"]},
   "f03": {name: "Charlie",
           age: 35,
           follows: ["f01", "f04", "f06"]},
   "f04": {name: "Debbie",
           age: 40,
           follows: ["f01", "f02", "f03", "f05", "f06"]},
   "f05": {name: "Elizabeth",
           age: 45,
           follows: ["f04"]},
   "f06": {name: "Finn",
           age: 25,
           follows: ["f05"]}};

function list(library) {
  var userList = library;
  var users = Object.keys(library);
  for (var i = 0; i < users.length; i++) {
    userList[users[i]].followed_by = findFollowers(users[i], library);
    userList[users[i]] = _.omit(userList[users[i]], 'age');
  }
  return userList;
}

function findFollowers(user, library) {
  var users = Object.keys(library);
  var followers = [];
  for (var i = 0; i < users.length; i++) {
    if (library[users[i]].follows.indexOf(user) !== -1) {
      followers.push(users[i]);
    }
  }
  return followers;
}

function followMost(library) {
  var users = Object.keys(library);
  var userArr = [];
  users.forEach(function(userId) {
    userArr.push(library[userId]);
  });

 var personFollowMost = _.max(userArr, function(u){
    return u.follows.length;
  });
  return personFollowMost.name;
}
// console.log(followMost(data));

function mostFollowers(library) {
  var followerArr = [];
  var newLib = library;
  for (var i in newLib) {
    newLib[i].followersNum = findFollowers(i, newLib).length;
    followerArr.push(newLib[i]);
  }

  var m = _.max(followerArr, function(u) {return u.followersNum;});
  var mostFollowersArr = [];
  mostFollowersArr.push(m);
  followerArr.forEach(function(item) {
    if (item.followersNum === m.followersNum) {
      mostFollowersArr.push(item);
    }
  });
  return mostFollowersArr;
}

function mostFollowersOver30(library) {
  var filFollowerArr = [];
  var filteredLib = findFollowersOver30(library);
  for (var i in filteredLib) {
    filFollowerArr.push(filteredLib[i]);
  }

  var n = _.max(filFollowerArr, function(u){
     return u.followed_by_over_30.length;
   });
  var nArr = [];
  filFollowerArr.forEach(function(item) {
     if (item.followed_by_over_30.length === n.followed_by_over_30.length) {
       nArr.push(item.name);
     }
   });
   return nArr;
}

function findFollowersOver30(library) {
  var userOver30 = [];

  for (var item in library) {
    if (library[item].age > 30) {
      userOver30.push(item);
    }
  }

  var newLib = list(library);
  function filteredOver30(lib) {
    for (var i in lib) {
      lib[i].followed_by_over_30 = lib[i].followed_by.filter(function (a) {
        return userOver30.indexOf(a) >= 0;
      });
    }
    return lib;
    }
  return filteredOver30(newLib);
}

console.log(mostFollowersOver30(data));



module.exports = {
  list: list,
  findFollowers: findFollowers,
  data: data,

};
//{
// name: "Alice",
// follows: ["f02", "f03", "f04"],
// followed by: ["f03", "f04"]
//}
