function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestStr(list).length;
  var border = repeat('*', longest+3);

  console.log(border);
  for (word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length) + '*');
  }
  console.log(border);
}

function repeat(str, times) {
  var result = str;

  for (var i = 0; i < times; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {
  var longest = "";

  for (var i = 0;i < list.length;i++) {

    if (longest.length < list[i].length){
      longest = list[i];
    }
  }
  return longest;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
