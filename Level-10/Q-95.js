function objFun(obj){
    
    let sum = 0;
    for(let key in obj){
        sum = sum + obj[key];
    }
    
    console.log(`Total = ${sum}`);

}

objFun({apple: 50, banana: 20, mango: 30});
objFun({pen: 10, pencil: 5});
objFun({});