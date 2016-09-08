/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */
// Write your code here...
function joinList(list){
  if(list.length === 0){
    return "";
  }else{
    var jointWords = "";
    for (var element of list){
      jointWords += element + ", ";
    }
    return jointWords;
  }
}

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
var concepts = joinList(conceptList);
console.log("Today I learned about " + concepts + ".");
