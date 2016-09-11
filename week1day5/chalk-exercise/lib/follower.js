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
// console.log(findFollowers("f02", data));

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
