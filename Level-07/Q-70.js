function array(arr){
    
    if(arr.length >= 2){

    let smallest = Infinity;
    let second = Infinity;

    for(i = 0; i < arr.length; i++){
        if(smallest > arr[i]){
            smallest = arr[i];
        }
    }
    for(i = 0; i < arr.length; i++){
        if(arr[i] > smallest && second > arr[i]){
            second = arr[i];
        }
    }
    
    console.log(second);
    
    }
    
    else{
        console.log("Please enter atleast 2 value in array.")
    }
}

array([10, 5, 8, 20]);
array([3, 1, 2]);
array([100, 50]);
array([100]);
