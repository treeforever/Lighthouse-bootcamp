// var args = process.argv;
// var a = Number(args[2]);
//     b = Number(args[3]);
//
//
// function sum(a, b){
//   var numSum = a + b;
//   console.log(numSum);
// }
// sum(a, b);
function sum(values){
  var total = 0;

  for (var value of values){
    var number = Number(value);
    if (!isNaN(number)){
      total += number;
    }
  }
  return total;
}

var arguments = process.argv.slice(2);
console.log(`The sum of the numbers is ${sum(arguments)}`);
