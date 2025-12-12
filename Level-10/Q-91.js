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

    console.log(obj);

}

array([1, 2, 2, 3]);
array([5, 5, 5]);
array([]);


