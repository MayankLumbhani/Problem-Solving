function positive(arr){
    let str = "";
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            str += arr[i] + " ";
        }
    }
    console.log(str);
}

positive([-1, 0, 5, 3, -2]);
positive([1, 2, 3]);
positive([-5, -2]);

