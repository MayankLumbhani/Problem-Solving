function check(year){
    
    if(year%4 == 0){
        console.log('leap year');
    }
    else{
        console.log('not a leap year');
    }
    
}

check(2020);
check(2000);
check(2025);