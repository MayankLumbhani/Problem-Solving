function digit(num){
    
    if(num<0){
        num = -(num);
    }
    
    let sum = 0;
    do{
        dig = num % 10 ;
        num = Math.floor(num /10);
        sum = sum + dig;
    }
    while(num>0);
    console.log(sum);
}

digit(-6854);
digit(644);
digit(11556);