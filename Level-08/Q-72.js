// Method - 1


function array(arr) {
    let newArr = [];
    let check = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] == arr[i]) {
                check = false;
                break;
            }
            else {
                check = true;
            }
        }
        if (check == true) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

array([1, 2, 2, 3, 3, 3]);
array(["a", "a", "b"]);
array([]);


// Method - 2


function array2(arr) {

    let arr2 = [];
    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
            arr2.push(arr[i]);
        }

    }

    console.log(arr2);

}

array2([1, 2, 2, 3, 3, 3]);
array2(["a", "a", "b"]);
array2([]);


// Method - 3


function array3(arr){
    
    let arr2 = [];
    let obj = {};
    
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    
    for(let key in obj){
        arr2.push(key);
    }
    
    console.log(arr2);
    
}

array3([1, 2, 2, 3, 3, 3]);
array3(["a", "a", "b"]);
array3([]);