function length(str){
    let count = 0;
    
    while(str[count]){
        count++;
    }
    console.log(count);
}

length("hello");
length("");
length("JavaScript");