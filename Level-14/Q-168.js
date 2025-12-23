function maxIndex(arr){

    let max = -Infinity;
    let maxInd = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            maxInd = i;
        }
    }

    console.log(maxInd);

}

maxIndex([3, 7, 2, 7]);
maxIndex([-5, -2, -10]);
maxIndex([42]);