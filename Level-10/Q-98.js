function objFun(obj){
    
    let arr = [];
    
    for(let key in obj){
        arr.push(obj[key]);
    }
    
    console.log(arr);

}

objFun({a: 1, b: 2, c: 3});
objFun({name: "Neel", age: 25});
objFun({});