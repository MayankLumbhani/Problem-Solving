// Method - 01

function negFront(arr){

    let arr1 = [];
    let arr2 = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr1.push(arr[i])
        }
        else{
            arr2.push(arr[i]);
        }
    }

    console.log(arr1.concat(arr2));

}

negFront([1, -2, 3, -4, 0]);
negFront([-1, -2, -3]);
negFront([1, 2, 3]);

// Method - 02

function negFront2(arr){

    let i = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[j] < 0){
          [arr[i],arr[j]] = [arr[j],arr[i]];  
          i++;
        }
    }
    console.log(arr);
}

negFront([1, -2, 3, -4, 0]);
negFront([-1, -2, -3]);
negFront([1, 2, 3]);