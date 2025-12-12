function odd_digit(num){
    
    let arr = [];
    let num1 = num;
    let dig;
    
    while(num != 0){
        dig = num%10;
        num = Math.floor(num/10);
        arr.push(dig);
    }
    
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 == 1){
            count++;
        }
    }
    
    console.log(count);
    
}

odd_digit(123456);
odd_digit(5050);
odd_digit(2468);
