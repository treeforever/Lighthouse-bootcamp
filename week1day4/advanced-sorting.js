var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { name: "m", age: 30},
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function advancedSorting(roster){
  roster.sort(function(a,b){
    if(a.name !== b.name){
      console.log(a.name > b.name);
      return a.name > b.name;
    }
    if(a.name === b.name){
      return b.age - a.age;
    }
  })
  return roster;
}
console.log(advancedSorting(students));
