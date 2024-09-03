function removeDuplicate(arr){
    // const uniqueArray = [];
    // for(let i = 0; i<arr.length; i++){
    //     if(uniqueArray.indexOf(arr[i])=== -1){
    //         uniqueArray.push(arr[i]);
    //     }
    // }
    // return uniqueArray;

    return [... new Set(arr)]
}

const arr = [1,2,3,4,4,3,5,6,7,7];
const newArr =[... new Set(arr)];
console.log(newArr);

console.log(removeDuplicate(arr));


