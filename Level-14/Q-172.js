function incSorted(arr){

    for(let i = 1; i < arr.length; i++){

        if(arr[i] > arr[i-1]){
            continue;
        }
        else{
            console.log(false);
            return;
        }

    }

    console.log(true);

}

incSorted([1, 2, 3, 4]);
incSorted([1, 2, 2, 3]);
incSorted([5]);