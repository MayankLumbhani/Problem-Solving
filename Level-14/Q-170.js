// Method - 01

function duplicate(arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.includes(arr[i])) {
            console.log(true);
            return;
        }
        else {
            newArr.push(arr[i]);
        }
    }

    console.log(false);

}

duplicate([1, 2, 3, 1]);
duplicate([1, 2, 3]);
duplicate([]);

// Method - 02

function duplicate2(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            console.log(true);
            return;
        }
    }

    console.log(false);
}

duplicate2([1, 2, 3, 6, 2, 5, 2]);
duplicate2([1, 2, 3]);


// Method - 03 => Find freq. of element by using obj and if any freq is 2 or greater than 1 then print true...........

let obj = {};

for(let i = 0; i < arr.length; i++){
    
}