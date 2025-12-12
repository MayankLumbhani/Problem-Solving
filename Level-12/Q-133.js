function even_digit(num){
    
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
        if(arr[i]%2 == 0){
            count++;
        }
    }
    
    console.log(count);
    
}

even_digit(123456);
even_digit(5050);
even_digit(1357);
