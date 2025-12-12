function numbers(n){
    
    let str = "";
    
    for(let i = n; i >= 1; i--){
        str = str + " " + i;
    }
    console.log(str);
    
}

numbers(5);
numbers(1);
numbers(3);