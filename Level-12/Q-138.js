function sum(num){
    
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum = sum + (i*i*i);
    }
    console.log(sum);
    
}

sum(3);
sum(1);
sum(2);