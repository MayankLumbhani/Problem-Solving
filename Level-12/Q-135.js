function absolute(a, b){
    
    let diff = a-b;
    
    if(diff < 0){
        diff = -(diff);
    }
    
    console.log(diff);
    
}

absolute(10, 3);
absolute(3, 10);
absolute(-5, 5);