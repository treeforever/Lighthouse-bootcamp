function check(num) {
  var numArr = num.toString().split("");
  var reversedNum = numArr.reverse();
  var filteredArr = filteredNum(reversedNum);
  var doubleFil = doubleFiltered(filteredArr);
  var leftNums = printLeftNums(reversedNum);
  var total = addition(doubleFil, leftNums);

  return checkLastDigit(total, reversedNum);
}

function filteredNum(nums) {
  var filteredArr = [];
  // nums.forEach(function (a){
  //   if (nums.indexOf(a) % 2 !== 0) {
  //     filteredArr.push(Number(a));
  //   } else {
  //     return;
  //   }
  // });
  for (var i=0; i < nums.length; i++){
    if (i % 2 !== 0) {
      filteredArr.push(Number(nums[i]));
    }
  }
  return filteredArr;
}

function doubleFiltered(filteredArr) {
  var sumArr = [];
  filteredArr.forEach(function (b) {
    var sum = b * 2;
    if (sum > 9) {
      sumArr.push(sum - 9);
    } else {
      sumArr.push(b * 2);
    }
  });
  return sumArr;
}

function printLeftNums(nums) {
  var leftNums = [];
  for (var i=1; i < nums.length; i++){
    if (i % 2 === 0) {
      leftNums.push(Number(nums[i]));
    }
  }
  return leftNums;
}

function addition(arr1, arr2) {
  function add(arr) {
    var sum = 0;
    arr.forEach(function(num) {
      sum += num;
    });
    return sum;
  }
  var y = add(arr1) + add(arr2);
  return y;
}

function checkLastDigit(num, num2) {
  var numStr = (num * 9).toString();
  return numStr[numStr.length-1] === num2[0];//both are string '3';
}

console.log("the number is " + check(1826758947583573));

// module.exports = {
//   filteredNum: filteredNum,
//   sum: sum,
//   printLeftNums: printLeftNums,
// };
