// Method - 01


function array(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}

array([3, 7, 2, 9]);
array([-5, -2, -10]);
array([42]);


// Method - 02


function array2(arr) {

    console.log(Math.max(...arr));

}

array2([3, 7, 2, 9]);
array2([-5, -2, -10]);
array2([42]);


// Method - 03


function array3(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr[sortedArr.length - 1]);


}

array3([3, 7, 2, 9]);
array3([-5, -2, -10]);
array3([42]);