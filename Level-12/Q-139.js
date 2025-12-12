function harshad_num(num){
    
    let arr = [];
    let num1 = num;
    let dig;
    let sum = 0
    
    while(num != 0){
        dig = num%10;
        num = Math.floor(num/10);
        sum = sum + dig;
    }
    
    if(num1%sum == 0){
        console.log(true);
    }
    else{
        console.log(false);
    }
    
}

harshad_num(18);
harshad_num(21);
harshad_num(19);

