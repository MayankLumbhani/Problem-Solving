function compare(str1,str2){
    let check;
    if(str1 === str2){
        check = true;
    }
    else{
        check = false;
    }
    console.log(check);
}

compare("hello","hello");
compare("Hello","hello");
compare("js","js ");
compare(1,"1");