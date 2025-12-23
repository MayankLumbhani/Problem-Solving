function check(arr){

    for(let i = 0; i < arr.length; i++){

        if(arr[i] > 0){
            continue;
        }
        else{
            console.log(false);
            return;
        }

    }

    console.log(true);

}

check([1, 3, 5]);
check([0, 1, 2]);
check([-1, 2, 3]);