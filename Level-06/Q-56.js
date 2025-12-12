function countOdd(arr){
    let count = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i]%2 != 0){
            count++;
        }
    }
    console.log(count);
}

countOdd([1, 2, 3, 4, 5, 6]);
countOdd([2, 4, 6]);
countOdd([2, 4,6, 7, 8]);
