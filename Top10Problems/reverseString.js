function reverseString(str){
    let newString=''
    for(let i=str.length-1; i>=0;i--){
        newString=newString.concat(str[i])
    }
    return newString;
}
console.log(reverseString("Hello Gello"));

// Shorter Formate 
function reverseStr(str){
    console.log(str.split("").reverse().join(""));
    
}
reverseStr("Hironmoy");

const arr =[1,3,4];
const newArr = arr.reverse();
console.log(newArr);
