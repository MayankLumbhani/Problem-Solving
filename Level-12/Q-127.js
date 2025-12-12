function count(n){
    
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(i%2 == 0 || i%3 == 0){
            count++;
        }
    }
    console.log(count);
    
}

count(6);
count(10);
count(1);