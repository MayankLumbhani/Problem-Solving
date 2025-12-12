function sum(n){
    
    let sum = 0;
    for(let i = 2; i <= n; i = i+2){
        sum = sum + i;
    }
    console.log(sum);
    
}

sum(6);
sum(5);
sum(1);