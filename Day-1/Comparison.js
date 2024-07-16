"use strict";

console.log( null > 0); // false because null is treated as Zero(0) in Comparison
console.log( null == 0); // false because equality
console.log( null >= 0); // true because null is treated as Zero(0) in Comparison


console.log( undefined > 0); // always false for undefined
console.log( undefined == 0);
console.log( undefined >= 0);

console.log("Abc" < "ABc"); //  Letter Order Fact & also Case Sensitive Fact.
console.log("Hiron" < "hiron");


let bigInt = 3402834012840128402148n;

console.log( typeof bigInt);
