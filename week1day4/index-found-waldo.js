function findWaldo(arr, found) {
  var count = 0;

  arr.forEach(function(name){
    if (name === "Waldo"){
      // found(count);
    }else{
      count++;
    }
  });
}

function actionWhenFound(count) {
  console.log("Found Waldo at index " + count + "!");
}

findWaldo(["Alice","Bob", "Waldo", "Winston"], actionWhenFound);
