var beheadedArr = process.argv.slice(2);

function piggedStr(str){
  return str.slice(1) + str[0] + "ay";
}

function concatenatedStr(arr){
  var linkedStr = "";

  for (var i = 0; i < arr.length; i++){
    if (i > 0) {
      linkedStr += " ";
    }
    linkedStr += piggedStr(arr[i]);
  }
  return linkedStr;
}
//
// function concatenatedStr(arr){
//   var linkedStr = [];
//
//   for (var i = 0; i < arr.length; i++){
//     linkedStr.push(piggedStr(arr[i])); // adds to array
//   }
//   return linkedStr.join(" "); // turns array into string. inserts a space between elements
// }

console.log(concatenatedStr(beheadedArr));
