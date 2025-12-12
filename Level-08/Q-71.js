function rmEven(array){
    let arr = [];
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 == 1){
            arr.push(array[i]);
        }
    }
    console.log(arr);
}

rmEven([1, 2, 3, 4, 5, 6, 7]);
rmEven([2, 4, 6]);
rmEven([1, 3, 5]);