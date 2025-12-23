// Method - 1


function array(arr){
    let zeros = 0;
    let ones = 0;
    let check;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0 && arr[i] != 1){
            console.log("Please store only  0 or 1 in array.");
            check = false;
            break;
        }
        else{
            check = true;
            if(arr[i] == 0){
                zeros++;
            }
            else{
                ones++;
            }
        }
    }
    if(check == true){
        console.log("Zeros :",zeros);
        console.log("Ones :",ones);
    }
    
}

array([0, 1, 0, 5, 1]);
array([0, 1, 0, 1, 1])
array([1, 1, 1]);
array([0, 0]);


// Method - 2


function array2(arr){

    let zeros = 0;
    let ones = 0;

    arr.forEach((value) => {
        value == 0 ? zeros++ : ones++;
    });

    console.log("Zeros :",zeros);
    console.log("Ones :",ones);
}

array2([0, 1, 0, 1]);
array2([0, 1, 0, 1, 1]);
array2([1, 1, 1]);
array2([0, 0]);