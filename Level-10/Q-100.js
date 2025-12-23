// Method - 1

function array(arr){
    
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i].age > 18){
            newArr.push(arr[i]);
        }
    }
    
    console.log(newArr);

}


array([{name: "A", age: 17}, {name: "B", age: 20}, {name: "C", age: 18}]);
array([{name: "Neel", age: 25}]);
array([{name: "Child", age: 10}]);


// Method - 2

function array2(arr){
    
    let arr2 = arr.filter((value) => {
        // console.log(value);
        if(value["age"]>18){
             console.log(value);
        }
    })

}


array2([{name: "A", age: 17}, {name: "B", age: 20}, {name: "C", age: 18}]);
array2([{name: "Neel", age: 25}]);
array2([{name: "Child", age: 10}]);