// Task 01
let a = 5;
let b = 10;
let sum = a+b;
console.log(sum);

// Task 02
let sub = b-a ;
console.log(sub);

// Task 03
let mul = a*b;
console.log(mul);

// Task 04
let div = b/a;
console.log(div);

// Task 05
let rem = b%a;
console.log(rem);

// Task 06
a+=5;
console.log(a);

// Task 07
b-=5;
console.log(b);

// Task 08
console.log(a>b);
console.log(a<b);

// Task 09
console.log(a>=b);
console.log(a<=b);

//Task 10 
let num1 = 45;
let num2 = '45';
console.log(num1 == num2); // true , Check only Value
console.log(num1 === num2); // false ,Check strictly (value + type)

// Task 11
let numberOfStudent = 10;
let isTeacherAvailable = true;

if((numberOfStudent>=5) && isTeacherAvailable){
    console.log("Class Started");
}
else {
    console.log("Class Delayed");
}

//Task 12 
if(numberOfStudent>=5 || isTeacherAvailable){
    console.log("Canteen Should Open")
}
else{
    console.log("All Closed")
}

// Task 13 
if (isTeacherAvailable){
    isTeacherAvailable=!isTeacherAvailable;
    console.log(isTeacherAvailable)
}

//Task 14
let x = 10;
(x >= 0 ? (console.log("Positive")):(console.log("Negative")));
(x % 2 == 0 ? console.log("Even"): console.log("Odd"))


