var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;
  return function(){
    console.log(list[i]);
    i++;
  }
})();

// console.log(loadedDie());
// console.log(loadedDie());
// console.log(loadedDie());

loadedDie();
loadedDie();
loadedDie();
