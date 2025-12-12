function array(arr){
    let str = "";
    for(let i = 0; i < arr.length; i++){
        str += arr[i] + " ";
    }
    console.log(str);
}

array([1, 2, 3]);
array([]);
array(["a", "b", "c"]);


// Method - 02


function array2(arr){
    
    console.log(arr.join(" "));
    
}

array2([1, 2, 3]);
array2([]);
array2(["a", "b", "c"]);


// Method - 03


function array3(arr){
    console.log(...arr);
}

array3([1, 2, 3]);
array3([]);
array3(["a", "b", "c"]);