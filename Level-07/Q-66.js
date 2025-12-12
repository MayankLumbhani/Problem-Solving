// Method - 01


function array(arr, value){
    
    let check = false;
    for(i = 0; i < arr.length; i++){
        if(value == arr[i]){
            console.log("index : ",i);
            check = true;
            break;
        }
    }
    if(check == false){
            console.log(-1);
        }
}

array([10, 20, 30], 20);
array([10, 20, 30], 40);
array(["a", "b"], "b");


// Method - 02


function array2(arr,value){
    
    console.log(arr.indexOf(value));
    
}

array2([10, 20, 30], 20);
array2([10, 20, 30], 50);
array2(["a", "b"], "b");