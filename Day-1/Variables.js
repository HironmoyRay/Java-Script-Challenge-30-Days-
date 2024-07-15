"use strict"; // treat all JS code as newer Version
/* ----------------------------------------------------
Discussing About "let" Variables 
------------------------------------------------------*/
let myName; // Variable Declare & Assigning value is undefine
console.log(myName); // undefine datatype 
console.log(typeof myName);

console.log(typeof (typeof myName));
console.table([myName, (typeof myName)])

myName = "Hironmoy"; 
myName= "Ray"; // Reassign but Can't ReDeclare.


/* ----------------------------------------------------
Discussing About "var" Variables 
------------------------------------------------------*/
var myText; // Declare & Assigning value is undefine.
var myText = "Hello Var"; // ReDeclare.
myText = " Welcome Var" // ReAssign.

console.log(myText);
console.log(typeof myText);


/* ----------------------------------------------------
Discussing About "const" 
------------------------------------------------------*/
// const is immutable
const PI = 3.1416; // Declare & Assigning all together
console.log(PI)
console.log(typeof PI)


