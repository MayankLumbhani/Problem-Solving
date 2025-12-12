// Method - 01


function array(arr){
    
    let newArr = [];
    
    for(i = 0; i < arr.length; i++){
        newArr[i] =  arr[i];
    }
    console.log(newArr);
}

array([1, 2, 3]);
array([]);
array(["x", "y", "z"]);
array([5, -2]);


// Method - 02


function array2(arr){
    
    let newArr = new Array(...arr);
    console.log(newArr);
    
}

array2([1, 2, 3]);
array2([]);
array2(["x", "y", "z"]);
array2([5, -2]);