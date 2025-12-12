function array(arr1, arr2){
    let newArr = [];
    let check;
    for(let i = 0; i < arr2.length; i++){
        for(let j = 0; j < arr1.length; j++){
            if(arr2[i] == newArr[j]){
                check = false;
                break;
            }
            else if(arr2[i] == arr1[j]){
                check = true;
                break;
            }
            else{
                check = false;
            }
        }
        if(check == true){
            newArr.push(arr2[i]);
        }
    }
    console.log(newArr);
}

array([1, 2, 3, 4], [3, 4, 5]);
array([1, 2], [3, 4]);
array([1, 1, 2], [1, 2, 2]);