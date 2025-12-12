function min(num1, num2, num3){
    
    if(num1 > num2 && num3 > num2){
        console.log(num2);
    }
    else if(num1 > num3){
        console.log(num3);
    }
    else{
        console.log(num1);
    }
    
}

min(3, 7, 5);
min(-1, -5, -3);
min(10, 10, 5);
