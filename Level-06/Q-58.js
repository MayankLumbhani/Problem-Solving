function negative(arr){
    let str = "";
    for(i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            str += arr[i] + " ";
        }
    }
    console.log(str);
}

negative([-1, 0, 5, 3, -2]);
negative([1, 2, 3]);
negative([-5, -2]);

