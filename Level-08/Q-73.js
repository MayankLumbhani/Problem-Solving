// Method - 1


function array(arr1, arr2){
    for(let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    console.log(arr1);
}

array([1, 2], [3, 4]);
array([], [5, 6]);
array(["a"], ["b", "c"]);


// Method - 2


function array(arr1, arr2){
    
    arr1 = [...arr1,...arr2];
    console.log(arr1);
    
}

array([1, 2], [3, 4]);
array([], [5, 6]);
array(["a"], ["b", "c"]);


// Method - 3


function array(arr1, arr2){
    
    arr1 = arr1.concat(arr2);
    console.log(arr1);
    
}

array([1, 2], [3, 4]);
array([], [5, 6]);
array(["a"], ["b", "c"]);