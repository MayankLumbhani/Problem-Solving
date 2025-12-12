function digit(num){
    
    let num1 = num;
    
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
        reverse = -(reverse);
    }
        
        if(num1 == reverse){
            console.log('Palindrome');
        }
        else{
            console.log('Not a Palindrome')
        }
    
}

digit(121);
digit(101);
digit(-123);
digit(505);
digit(46);