// Method - 01


function array(arr, value){
    let count = 0;
    for(i = 0; i < arr.length; i++){
        if(value == arr[i]){
            count++;
        }
    }
    console.log(count);
}

array([1, 2, 2, 3, 2], 2);
array([5, 4, 5], 5);
array([1, 2, 3], 4);


// Method - 02


function array2(arr, value) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }

    console.log(obj[value]);

}

array2([1, 2, 2, 3, 2], 2);
array2([5, 5, 5], 5);
array2([1, 2, 3], 4);


