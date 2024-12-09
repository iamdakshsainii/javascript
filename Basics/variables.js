// prefer camelCase

// Variables declared with let have Block Scope
//Variables declared with let must be Declared before use
//Variables declared with let cannot be Redeclared in the same scope

// so basic to learn here is 
// const -> scope hota h, not update and not redeclare
// let -> scope h , update kr skte hai but not redeclare
// var -> Variables declared with var can be redeclared without error.

// Let
let fname = "Daksh";
// update possible not redeclared
fname="Saini"; 

// Var
var fullName= "Daksh Saini";
fullName= "Ashish Soni";
var fullName=12;

//const
const fullname2 = "Saurabh yadav";
// fullname2= "aditya agarwal"; // give error

// print
console.table([ fname, fullName, fullname2]);