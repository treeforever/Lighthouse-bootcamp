function isPalindrome(s) {
  var original = s.replace(/ /g, "");
  stringReverse = original.split("").reverse().join("");
  return original == stringReverse;
}

module.exports = isPalindrome;
