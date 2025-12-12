function check(age){
    if(age>=0){
    if(age>=0 && age<=12){
        console.log("child");
    }
    else if(age>=13 && age<=19){
        console.log("teenager");
    }
    else{
        console.log("adult");
    }
    }
    else{
        console.log("Please enter valid age.");
    }
}

check(-22);