function check(arr){

    for(let i = 0; i < arr.length; i++){

        if(arr[i]%2 == 0){
            continue;
        }
        else{
            console.log(false);
            return;
        }

    }

    console.log(true);

}

check([2, 4, 6]);
check([2, 3, 4]);
check([]);