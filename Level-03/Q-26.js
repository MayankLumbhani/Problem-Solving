function check(num){
    
    if(num == 2){
        console.log('Prime');
    }
    
    else{
    
    let prime = true;
    for(let i = 2; i<num; i++){
        if(num%i == 0){
            prime = false;
            break;
        }
    }
    if(prime == true){
        console.log('Prime');
    }
    else{
        console.log('Not a Prime');
    }
    }
}

check(2);
check(15);
check(17);

