/* substring method */
const sports = "Cricket"
const subSports = sports.substring(0,2); // Negative Value not allowed. Neg Value treated as Zero (0)
console.log(subSports);


/* slice method */
const myName = "Hironmy"
console.log(myName.length);
const sliceName = myName.slice(-1,4); // Neg Value Allowed
// for negVal => start = ( negVal + length );
// after that start less than Zero , then stat = 0;
// or start greater than length , then empty array returned.
console.log(sliceName);

/* trim method */
let game = "     PUBG - Free Fire      "
console.log(game.trim()); // Remove white space from start & end not middle

/* replace Method */
let url = "https://hironmoy_ray/hp%20ray"
console.log(url.replace('%20', "-"));

/* Split Method */
let fruits = 'apple mango banana'
console.log(fruits.split(' '));
// console.log(fruits.split('a'));