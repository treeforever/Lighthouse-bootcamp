var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

function pythagorean(x, y){
  var sum  = x * x + y * y;
  var root =  Math.sqrt(sum);
  return root;

}

var result = input.map(function(nums){
  return pythagorean(nums.x, nums.y);
  }
);


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
