var countdownGenerator = function (x) {
  /* your code here */
  return function(){
    if(x > 0){
      console.log("T-minus " + x);
      x -= 1;
    }else if(x < 0){
      console.log("Rockets already gone, bub!");
      x -= 1;
    }else{
      console.log("Blast Off!");
      x -= 1;
    }
  };


};

var countdown = countdownGenerator(2);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
