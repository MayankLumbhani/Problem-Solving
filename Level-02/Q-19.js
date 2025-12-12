function print(num){
    
    let product = 1;
    
    if(num == 0){
        console.log(1);
    }
    else{
    
    for(let i = 1; i<=num; i++){
        product = product * i;
    }
    console.log(product);
    
    }
}

print(0);
print(5);