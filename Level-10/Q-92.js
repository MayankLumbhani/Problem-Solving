function array(arr) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }
    
    let max = obj[arr[0]];
    let maxNum = arr[0];
    
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]] > max){
            max = obj[arr[i]];
            maxNum = arr[i];
        }
    }
    
    console.log(maxNum);

}

array([1, 2, 2, 3]);
array([4, 4, 1, 1, 4]);
array([7]);


