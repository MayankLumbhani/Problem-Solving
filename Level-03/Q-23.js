function digit(num){
    
    if(num<0){
        num = -(num);
    }
    
    let product = 1;
    do{
        dig = num % 10 ;
        num = Math.floor(num /10);
        product = product * dig;
    }
    while(num>0);
    console.log(product);
}

digit(505);
digit(123);
digit(46);