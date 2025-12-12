function smallest_digit(num){
    
    let arr = [];
    let num1 = num;
    let dig;
    
    while(num != 0){
        dig = num%10;
        num = Math.floor(num/10);
        arr.push(dig);
    }
    
    let min = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    
    console.log(min);
    
}

smallest_digit(5823);
smallest_digit(709);
smallest_digit(4);

