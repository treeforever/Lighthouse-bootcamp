var arg = process.argv;

function obfuscator(password){
  var changedArg = password.replace(/a/gi, '4');
  changedArg = changedArg.replace(/e/gi, '3');
  changedArg = changedArg.replace(/o/gi, '0');
  changedArg = changedArg.replace(/l/gi, '1');
  return changedArg;
}

console.log(obfuscator(arg[2]));
