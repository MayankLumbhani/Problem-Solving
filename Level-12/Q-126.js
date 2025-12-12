function sum(n){
    
    let sum = 0;
    for(let i = 1; i <= n; i = i+2){
        sum = sum + i;
    }
    console.log(sum);
    
}

sum(5);
sum(6);
sum(1);