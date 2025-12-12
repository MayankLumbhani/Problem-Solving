function array(arr){
    
    let positive = arr[0];
    let negative = arr[0];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > positive && arr[i] > 0 ){
            positive = arr[i];
        }
        else if(arr[i] < negative && arr[i] < 0){
            negative = arr[i];
        }
    }
    if(positive > 0){
        console.log("Largest Positive :",positive);
    }
    else{
        console.log("No any positive number in array.");
    }
    if(negative < 0){
        console.log("Smallest Negative :",negative);
    }
    else{
        console.log("No any negative number in array.");
    }
    
}

array([-5, -1, 3, 7, -2]);
array([1, 2, 3]);
array([-3, -1]);
