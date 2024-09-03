function longestWord(str){
   let words = str.split(" ");
//    console.log(words);
   let myWord = "";
//    for(let i=0; i<words.length; i++){
//     if(myWord.length<words[i].length){
//         myWord=words[i];
//     }
//    }
for (let word of words){
    if(word.length > myWord.length){
        myWord = word;
    }
}
   
   return myWord;
}

console.log(longestWord("I love Bangladesh Cricket"));