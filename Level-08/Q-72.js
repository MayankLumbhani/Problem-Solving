function array(arr){
    let newArr = [];
    let check = true;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            if(arr[j] == arr[i]){
                check = false;
                break;
            }
            else{
                check = true;
            }
        }
        if(check == true){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

array([1, 2, 2, 3, 3, 3]);
array(["a", "a", "b"]);
array([]);