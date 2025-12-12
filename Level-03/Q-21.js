function digit(num){
    
    if(num<0){
        num = -(num);
    }
    
    let count = 0;
    do{
        count = count + 1;
        num = Math.floor(num /10);
        
    }
    while(num>0);
    console.log(count);
}

digit(-6854);
digit(644);
digit(11556);