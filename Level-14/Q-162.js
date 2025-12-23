function triple(arr){

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i]*3;
    }
    console.log(arr);
    
}

triple([1, 2, 3]);
triple([-1, 0, 4]);
triple([]);