function print(num){
    
    let count = 0;
    
    for(let i = 1; i<=num; i++){
        if(i%3 == 0){
            count += 1;
        }
    }
    
    console.log(count);
    
}

print(10);