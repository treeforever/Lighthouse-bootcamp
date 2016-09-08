function daysInFeb(year) {
  if (isLeapYear(year)){
    return 29;
  }else{
    return 28;
  }
}

function isLeapYear(year) {
  return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 400);
}

function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}


console.log(daysInFeb(1900));
