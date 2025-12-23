// Method - 01


function check(str){
    
    if(str.length > 5){
        console.log(true);
    }
    else{
        console.log(false);
    }
    
}

check("hello");
check("javascript");
check("");


// Method - 02



function check2(str){

    var i = 0;
    while(str[i] != undefined){
        i++;
    }
    console.log(i>5?true:false);
    
}

check2("hello");
check2("javascript");
check2("");