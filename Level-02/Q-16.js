function print(num){
    
    let product = 1;
    
    for(let i = 1; i<=num; i++){
        product = product * i;
    }
    console.log(product);
}

print(5);