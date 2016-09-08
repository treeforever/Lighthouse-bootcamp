var obj = [
  {playlists1: {
             p01 : {
                   name: "c",
                   tracks: ["t01", "t02"]
             }

           },
  tracks: {
          t01: {

          },
          t02: {

          }
        }
  },
  {playlists2: {
            p04: {

            },
            p05: {

            }
          }
  }

];

var arr = ["sam", "salmon", "sack"];
var arr2 = [2,45,67];

// var printName = function (name){
//   console.log((Object.keys(name)));
// };
//
// var myArr = obj.forEach(function (name){
//   console.log((Object.keys(name)));
//   }
// );
// console.log(myArr);

// var double = arr2.map(function(num){
//   return num * 2;
// });
//
// console.log(double);
//
// var numbers = [1, 4, 9];
// var doubles = numbers.map(function(num) {
//   return num * 2;
// });
//
// console.log(doubles);

function feedCat(){
    console.log("Kibble, tinned food and water");
}
console.log(feedCat instanceof Object);

feedCat.food = "kibble";
function tonightChores(){
    return feedCat;
}
var tonight = tonightChores();
tonight();
