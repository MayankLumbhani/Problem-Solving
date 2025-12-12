
function array(arr){
    let check;
    for(i = 1; i < arr.length; i++){
        if(arr[i] >= arr[i-1]){
            check = true;
        }
        else{
            check = false;
            break;
        }
        }
    
    console.log(check);
}

array([1, 2, 3, 4]);
array([1, 2, 2, 3]);
array([3, 2, 1]);
