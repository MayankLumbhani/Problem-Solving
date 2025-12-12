function array(arr){
    
    for(i = 0; i < arr.length; i++){
        arr[i] =  arr[i]*arr[i];
    }
    console.log(arr);
}

array([1, 2, 3]);
array([0]);
array([5, -2]);
