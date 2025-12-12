function armStrong(input){
    
    let digit;
    let digArr = [];
    let temp = input;
    while(temp/10 != 0){
        digit = temp%10;
        temp = Math.floor(temp/10);
        digArr.push(digit);
    }
    
    let digit2;
    let sum = 0;
    let product;
    
    for(let i = 0; i < digArr.length; i++){
        product = 1;
        
        for(let j = 0; j < digArr.length; j++){
            
            product = product * digArr[i];
        }
        
        sum = sum + product;
    }
    
    if(sum == input){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

armStrong(153); // 3-digit
armStrong(9474); // 4-digit  
armStrong(9475);  // 4-digit
armStrong(54748); // 5-digit
armStrong(548834); // 6-digit
