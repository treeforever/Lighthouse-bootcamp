var id = (function () {
  var count = 0;
  return function(){
    count++;
    return count;
  }
})();

console.log(id()); // 0
console.log(id()); // 1
console.log(id()); // 2
console.log(id()); // 3
