function check(arr){

    for(let i = 0; i < arr.length; i++){

        if(arr[i]%2 == 0){
            console.log(true);
            return;
        }
        else{
            continue;
        }

    }

    console.log(false);

}

check([1, 3, 5]);
check([1, 4, 5]);
check([2]);