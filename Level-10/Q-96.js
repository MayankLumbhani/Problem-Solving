function objFun(obj){
    
    let sum = 0;
    let count = 0;
    for(let key in obj){
        sum = sum + obj[key];
        count++;
    }
    
    console.log(`Average Marks = ${parseInt(sum/count)}`);

}

objFun({math: 80, science: 90, english: 70});
objFun({only: 100});
objFun({});