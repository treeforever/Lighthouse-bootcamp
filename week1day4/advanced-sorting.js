var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function advancedSorting(roster){
  roster.sort(function(a,b){
    if(a.name > b.name){
      return 1;
    }
    if(a.name < b.name){
      return -1;
    }
    if(a.name === b.name){
      return b.age - a.age;
    }
  })
  return roster;
}
console.log(advancedSorting(students));
