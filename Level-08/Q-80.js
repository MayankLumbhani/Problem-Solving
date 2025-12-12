function array(arr){
    let even = [];
    let odd = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 == 0){
            even.push(arr[i]);
        }
        else{
            odd.push(arr[i]);
        }
    }
    console.log("Even =",even);
    console.log("Odd = ",odd);
    
}

array([1, 2, 3, 4, 5]);
array([2, 4, 6]);
array([1, 3, 5]);

