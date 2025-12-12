function greater10(arr){
    let str = "";
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            str += arr[i] + " ";
        }
    }
    console.log(str);
}

greater10([5, 12, 7, 20, 3]);
greater10([1, 2, 3]);
greater10([10, 11, 9]);

