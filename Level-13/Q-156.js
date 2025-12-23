function repChar(str){

    let newStr = "";
    for(let i = 0; i < str.length; i++){
        newStr += str[i] + str[i];
    }

    console.log(newStr);

}

repChar("abc");
repChar("Hi");
repChar("A!");