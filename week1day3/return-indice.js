function lowerCase(str){
  return str.toLowerCase();
}

function removeSpaces(str){
  return str.replace(/\s/g,'');
}

function buildletterCountingObj(str){
  var newStr = removeSpaces(lowerCase(str));
  var newObj = {};

  for(var i = 0; i < newStr.length; i++){
    if (!newObj.hasOwnProperty(newStr[i])){
      newObj[newStr[i]] = [i];
    }else{
      newObj[newStr[i]].push(i);
    }
  }
  return newObj;
}

console.log(buildletterCountingObj("lighthouse in the house"));
