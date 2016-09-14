function isPalindrome(s) {
  var original = s.replace(/ /g, "");
  var stringReverse = original.split("").reverse().join("");
  return original === stringReverse;
}

module.exports = isPalindrome;
