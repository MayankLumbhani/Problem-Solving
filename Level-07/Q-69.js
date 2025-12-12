// Method  - 01


function array(arr){
    
    if(arr.length >= 2){

    let largest = -Infinity;
    let second = -Infinity;

    for(i = 0; i < arr.length; i++){
        if(largest < arr[i]){
            largest = arr[i];
        }
    }
    for(i = 0; i < arr.length; i++){
        if(arr[i] < largest && second < arr[i]){
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


// Method - 02

// Note : This isnot valid for only 1 input in array , for validation we must put condition like Methd - 01

function array2(arr){

    let max = -Infinity;
    let smax = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i]>max){
            smax = max;
            max = arr[i];
        }
        else if(arr[i] > smax && arr[i] < max){
            smax = arr[i];
        }
    }
    console.log(smax);
}

array2([10, 5, 8, 20]);
array2([3, 1, 2]);
array2([100, 50]);
array2([100]);