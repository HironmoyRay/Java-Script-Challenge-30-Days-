"use strict";
/*----------------------- 
    Primitive Datatype 
----------------------*/
/* Type	        typeof return value 	Object wrapper
-------------------------------------------------------------
Null	        "object"	               N/A
Undefined	    "undefined"	               N/A
Boolean	        "boolean"	               Boolean
Number	        "number"	               Number
BigInt	        "bigint"	               BigInt
String	        "string"	               String
Symbol	        "symbol"	               Symbol
------------------------------------------------------------*/

let tk = 50;
let district = "Rangpur";
let isOpen = false;
let state = null;
let person = undefined;

console.table([(typeof tk), (typeof district), (typeof isOpen), (typeof state), (typeof person)]);


let bigInt = 3402834012840128402148n;
console.log( typeof bigInt);

let id = Symbol('123');
console.log(typeof id);

/* Non Primitive Data Type*/

// Array => Object
// Object => Object
// Function => Function Object

let myFunc = function (){
    console.log("Hello World");
}

console.log( typeof myFunc)