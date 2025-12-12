function digit(num){
    
    if(num<0){
        num = -(num);
        var neg = true;
    }
    
    let reverse = 0;
    
    do{
        dig = num % 10 ;
        num = Math.floor(num /10);
        
       reverse = (reverse*10) + dig;
    }
    while(num>0);
    
    if(neg == true){
        console.log(-(reverse));
    }
    
    else{
        console.log(reverse);
    }
    
}

digit(100);
digit(505);
digit(-123);
digit(46);