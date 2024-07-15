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
