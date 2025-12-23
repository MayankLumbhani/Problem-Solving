// Method - 1


function array(arr){
    
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    let avg = sum/arr.length;
    
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > avg){
            count++;
        }
    }
    console.log(count);
    
}

array([1, 2, 3, 4, 5]);
array([10, 10, 10]);
array([5, 15]);

