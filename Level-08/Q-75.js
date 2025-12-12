function array(arr){
    
    let zero = arr[arr.length - 1]; 
    for(let i = 1; i < arr.length; i++){
            arr[arr.length-i] = arr[arr.length-i-1];
           
    }
    arr[0] = zero;
    console.log(arr);
}

array([1, 2, 3, 4]);
array([195, 2985, 3, 4789]);
array([10]);
array([]);