function check(num){
    
    if( num%5 == 0 && num%3 == 0){
        console.log('divisible by 5 and 3');
    }
    else{
        console.log('not divisible by both');
    }
    
}

check(10);
check(11);
check(-15);