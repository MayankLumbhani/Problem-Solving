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