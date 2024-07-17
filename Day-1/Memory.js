// Stack / Primitive Data Memory Allocation 
let myName = "Hironmoy";
console.log(myName);

let nickName = myName; // Copy 
nickName = "Ray";
console.log(myName); 
console.log(nickName);

// Heap Memory / Non Primitive Memory Allocation
let userOne = 
{
    id:1705045,
    name: "Hironmoy"
}
let userTwo = userOne; // Reference

userTwo.name = "Partho"
console.log(userOne.name);

