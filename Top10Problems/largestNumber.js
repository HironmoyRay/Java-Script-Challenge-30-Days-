function largestNumber(arrayOfNumber){
    // return arrayOfNumber.sort()[arrayOfNumber.length-1]
    let largest = arrayOfNumber[0];

    for(let i=0; i<arrayOfNumber.length;i++){
        if(arrayOfNumber[i]>largest){
            largest = arrayOfNumber[i]
        }
    }
    return largest;
}

const result = largestNumber([1,34,5,23,67,26,12,62,78,87,56, -2, 90])
console.log(result);
