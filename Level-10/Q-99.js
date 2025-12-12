function objFun(obj){
    
    count = 0;
    
    for(let key in obj){
        count++;
    }
    
    console.log(count);

}

objFun({a: 1, b: 2, c: 3});
objFun({});
objFun({x : 10});