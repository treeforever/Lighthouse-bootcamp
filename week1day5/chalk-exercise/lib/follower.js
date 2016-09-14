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

function usersWithFollowInfo(library) {
  var userIds = Object.keys(library);

  var users = userIds.map(function(userId) {
    return library[userId];
  });

  usersWithFollowInfo = users.map(function(user) {
    var newU = _.pick(user, 'name', 'follows');
    newU.followedBy = findFollowers(userId, library);
    return newU;
  });

  return usersWithFollowInfo;
}

function findFollowers(userId, library) {
  var users = Object.keys(library);
  var followers = [];
  for (var i = 0; i < users.length; i++) {
    if (library[users[i]].follows.indexOf(userId) !== -1) {
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

function mostFollowers(library) {
  var followerArr = [];
  var newLib = library;
  for (var i in newLib) {
    newLib[i].followersNum = findFollowers(i, newLib).length;
    followerArr.push(newLib[i]);
  }

  var m = _.max(followerArr, function(u) {return u.followersNum;});
  var mostFollowersArr = [];
  followerArr.forEach(function(item) {
    if (item.followersNum === m.followersNum) {
      mostFollowersArr.push(item.name);
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

function follow30Most(library) {
  var filteredOver30 = findFollowersOver30(library);
  var filFollowArr = [];
  for (var i in filteredOver30) {
    filFollowArr.push(filteredOver30[i]);
  }

  var k = _.max(filFollowArr, function(u){
     return u.follows.length;
   });
  var kArr = [];
  filFollowArr.forEach(function(item) {
     if (item.follows.length === k.follows.length) {
       kArr.push(item.name);
     }
   });
   return kArr;
}

function listNonMutualFollowUsers(library) {
  var listNonMFUsers = [];

  for (var i in library) {
    for (var k = 0; k < library[i].follows.length; k++){
      if (findNotFollowBack(i, library[i].follows[k], library)) {
        listNonMFUsers.push(i);
      }
    }
  }
  return _.uniq(listNonMFUsers);
}

function findNotFollowBack(u1, u2, library) {
  if (library[u2].follows.indexOf(u1) === -1) {
    return true;
  }

}

function listReach(library) {
  var userList = list(library);
  var uList = [];
  for (var i in userList) {
    userList[i].followNum = userList[i].follows.length;
    userList[i].followerNum = userList[i].followed_by.length;
    userList[i].sum = userList[i].followNum + userList[i].followerNum;

    var user = {};
    user.name = userList[i].name;
    user.reach = userList[i].sum;
    uList.push(user);
  }
  return uList;
}

module.exports = {
  list: list,
  findFollowers: findFollowers,
  data: data,
};
