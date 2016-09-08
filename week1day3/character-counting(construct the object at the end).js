function printLetterAndCount(str){
  var newStr = removeSpaces(lowerCase(str));//lighthouseinthehouse
  var newArr = findUniqueLetters(newStr);//lighthousen
  var letterCountObj = {};

  for(var i = 0; i < newArr.length; i++){
    letterCountObj[newArr[i]] = countLet(newStr, newArr[i]);
  }

  return letterCountObj;
}

function lowerCase(str){
  return str.toLowerCase();
}

function removeSpaces(str){
  return str.replace(/\s/g,'');
}

function findUniqueLetters(str){
  var uniqueLetterArr = [];
  for (var i = 0; i < str.length; i++){
    if (uniqueLetterArr.indexOf(str[i]) === -1){
      uniqueLetterArr.push(str[i]);
    }
  }
  return uniqueLetterArr;
}

//lighthouse lab, l
function countLet(str, letter){
  var count = 0;
  for(var i = 0; i < str.length; i++){
    if (str[i] === letter){
      count++;
    }
  }
  return count;
}



console.log(printLetterAndCount("lighthouse in the house"));
