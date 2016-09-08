// var argArray = process.argv; //['node' 'reverse.js' 'fish' '1']
//
// var beheadedArr = behead(argArray); // ['fish' '1']]
// var beheadedReversedArr = beheadedArr.map(reversedStr); // ['hsif' '1']
// beheadedReversedArr.forEach(printStr);
//
//
// function behead(arr) {
//   return arr.slice(2);
// }
//
// function printStr(str) {
//   console.log(str);
// }

function reversedStr(str){
  var newArr = [];
  for (i = str.length-1; i >= 0; i--){
    newArr.push(str[i]);
  }
  var updatedStr = "";
  for (var i = 0; i < newArr.length; i++){
    updatedStr = updatedStr + newArr[i];
  }
  return updatedStr;
}

function printEachReversed(array){
  for(var i = 2; i<array.length; i++){
  console.log(reversedStr(array[i]));
  }
}


printEachReversed(argArray);
