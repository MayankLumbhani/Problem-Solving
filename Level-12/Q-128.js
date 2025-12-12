function count(n){
    
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(i%2 == 0 && i%5 == 0){
            count++;
        }
    }
    console.log(count);
    
}

count(20);
count(9);
count(10);