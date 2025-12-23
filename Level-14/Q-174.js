function maxDif(arr){

    let min = arr[0];
    let max = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < min){
            min = arr[i];
        }
    }

    let str = `max = ${max}, min = ${min}, Maximum difference = ${max-min}`;

    console.log(str);

}

maxDif([1, 5, 3, 9]);
maxDif([10, 10, 10]);
maxDif([-5, -1, -10]);