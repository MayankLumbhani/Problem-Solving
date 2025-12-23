function countThe(str){

    let count = 0;
    for(let i = 0; i < str.length; i++){
        if((str[i] == "t" || str[i] == "T")  && (str[i+1] == "h" || str[i+1] == "H") && (str[i+2] == "e" || str[i+2] == "E") && (str[i+3] == " " || i+2 == str.length-1)){
            count++;
        }
    }
    console.log(count);

}

countThe("the cat and the dog the");
countThe("There is the book");
countThe("no keyword here");