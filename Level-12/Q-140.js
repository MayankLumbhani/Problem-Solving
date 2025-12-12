function automorphic_num(num){
    
    let dig = (num*num)%10;
    
    if(dig == num){
        console.log(true);
    }
    else{
        console.log(false);
    }
    
}

automorphic_num(5);
automorphic_num(6);
automorphic_num(7);


