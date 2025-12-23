function minIndex(arr){

    let min = Infinity;
    let minInd = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minInd = i;
        }
    }

    console.log(minInd);

}

minIndex([3, 7, 2, 7]);
minIndex([-5, -2, -10]);
minIndex([42]);