// Method - 1


function array(arr){
    
    let last = arr[0]; 
    for(let i = 0; i < arr.length - 1; i++){
            arr[i] = arr[i+1];
           
    }
    arr[arr.length - 1] = last;
    if(arr.length == 0){
        console.log("[]");
    }
    else{
            console.log(arr);
    }
}

array([1, 2, 3, 4]);
array([195, 2985, 3, 4789]);
array([10]);
array([]);


// Method - 2


function array2(arr){

    let add = arr.shift();
    arr.push(add);
    console.log(arr);

}

array2([1, 2, 3, 4]);
array2([195, 2985, 3, 4789]);
array2([10]);
array2([]);