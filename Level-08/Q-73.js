function array(arr1, arr2){
    for(let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    console.log(arr1);
}

array([1, 2], [3, 4]);
array([], [5, 6]);
array(["a"], ["b", "c"]);