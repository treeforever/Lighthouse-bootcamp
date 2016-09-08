var base;
var limit;
var denominator1;
var denominator2;
var print1;
var print2;


for (var num = base; num <= limit; num++){
  var output = '';
  if (num % denominator1 === 0){
    output += print1;
  }
  if (num % denominator2 === 0){
    output += print2;
  }
  console.log(output === ''? num : output);
}
