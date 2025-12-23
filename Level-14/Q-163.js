function triple(arr){

    for(let i = 0; i < arr.length; i++){
        arr[i] = Math.abs(arr[i]);
    }
    console.log(arr);
    
}

triple([-1, 2, -3]);
triple([0, -5, 7]);
triple([10]);