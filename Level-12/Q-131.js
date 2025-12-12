function largest_digit(num){
    
    let arr = [];
    let num1 = num;
    let dig;
    
    while(num != 0){
        dig = num%10;
        num = Math.floor(num/10);
        arr.push(dig);
    }
    
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    
    console.log(max);
    
}

largest_digit(5823);
largest_digit(709);
largest_digit(4);

