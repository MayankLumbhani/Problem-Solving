function check(str1, str2){
    
    if(str1.length > str2.length){
        console.log(str1);
    }
    else if(str1.length == str2.length){
        console.log(`${str1} (Both string have same length so I'll assume first.)`);
    }
    else{
        console.log(str2);
    }
    
}

check("hi", "hello");
check("javascript", "js");
check("abc", "xyz");