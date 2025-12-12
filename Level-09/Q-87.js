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