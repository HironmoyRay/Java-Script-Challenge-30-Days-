function palindrome(str){
    let str2 = str.split("").reverse().join("");
    if(str==str2){
        return "Yes"
    }
    return "No"
    
}

console.log(palindrome("eracecare"));
