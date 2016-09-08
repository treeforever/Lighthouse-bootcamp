function singleDiceRoller(){
  return Math.floor(Math.random(0,1) * 6 + 1);
}

function diceRoller(numOfDice){
  var arrOfDiceNum = [];
  for(var i = 0; i < numOfDice; i++){
    var diceNum = singleDiceRoller();
    arrOfDiceNum.push(diceNum) ;
  }
  return arrOfDiceNum;
}

function printDiceNum(arr){
  var strOfDiceNum = arr.join(", ");
  return strOfDiceNum;
}

var numOfDice = Number(process.argv[2]);
var arrOfDiceNum = diceRoller(numOfDice);
console.log("Rolled " + numOfDice + " dice: " +printDiceNum(arrOfDiceNum));
