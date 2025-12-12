function per_num(n){
    
    let sum = 0;
    for(let i = 1; i < n; i++){
        if(n%i == 0){
            sum = sum + i;
        }
    }
    if(sum == n){
        console.log(true);
    }
    else{
        console.log(false);
    }
    
}

per_num(6);
per_num(28);
per_num(10);