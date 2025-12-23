function count(arr, k){

    let count1 = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > k){
            count1++;
        }
    }
    console.log(count1);

}

count([1, 5, 7, 2], 4);
count([10, 20, 30], 25);
count([1, 2, 3], 5);