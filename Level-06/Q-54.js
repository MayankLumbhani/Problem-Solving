// Method - 01


function array(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(min>arr[i]){
            min = arr[i];
        }
    }
    console.log(min);
}

array([3, 7, 2, 9]);
array([-5, -2, -10]);
array([42]);


// Method - 02


function array2(arr) {

    console.log(Math.min(...arr));

}

array2([3, 7, 2, 9]);
array2([-5, -2, -10]);
array2([42]);


// Method - 03


function array3(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr[0]);


}

array3([3, 7, 2, 9]);
array3([-5, -2, -10]);
array3([42]);

