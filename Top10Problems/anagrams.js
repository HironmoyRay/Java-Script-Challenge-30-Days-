function anagrams(str1,str2){
    let result = true;
    if(str1.length == str2.length){
        for (let letter1 of str1){
            if(str2.includes(letter1) === false){
                result = false;
                return result;
            }
        }
    }
    else{
        result = false;
    }
    return result;
}
console.log(anagrams("listen","silent"));

function anagramsTwo(str1,str2){
    let myStr1 = str1.split("").sort().join("");
    let myStr2 = str2.split("").sort().join("");
    if(myStr1 === myStr2){
        return true;
    }
    else{
        return false;
    }
}

console.log(anagramsTwo("silent","listen"));