"use strict";

let count = 33;
count = '33aa';
count = null;
count = undefined;

let conversionOfCount = Number ( count );

console.log(typeof conversionOfCount);
console.log(conversionOfCount);

let isLogIn = null;
isLogIn = undefined;
let boolIsLogIn = Boolean (isLogIn);

console.log(typeof boolIsLogIn);
console.log(boolIsLogIn);