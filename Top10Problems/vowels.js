function countVowels(str){
    const myStr = str.toLowerCase();
    const vowels = "aeiou";
    let count = 0;
    for(let item of myStr){
        if(vowels.includes(item)==true){
            count++
        }
    }
    return count;
}

const result = countVowels("Hello World YOU Are My Love");
console.log(result);
