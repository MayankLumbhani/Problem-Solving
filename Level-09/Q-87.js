// Method - 01

function perSqr1(input){
    var store = input ** (1/2);
    if(Math.floor(store) == Math.ceil(store)){
        console.log(true)
    }
    
    else{
        console.log(false)
    }

}
perSqr1(16);
perSqr1(15);
perSqr1(1);


//  Method - 02

function perSqr2(input){
    var store = input ** (1/2);
    if(store*store == input){
        console.log(true)
    }
    
    else{
        console.log(false)
    }

}
perSqr2(16);


// Method - 03


function perSqr3(input){
    var store = Math.sqrt(input);
    if(store*store == input){
        console.log(true)
    }
    
    else{
        console.log(false)
    }

}
perSqr3(16);
perSqr3(15);


function perSqr4(input){
    
    let check;
    let i;
    for(i = 1; i < input; i++){
        if(i*i == input){
            check = true;
            console.log(check);
            break;
        }
        else{
            check = false;
        }
        
    }
    
    if(check == false && i == input){
        console.log(check);
    }

}
perSqr4(16);
perSqr4(15);