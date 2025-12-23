function rmSpeChar(str){

    let newStr = "";
    for(let i = 0; i < str.length; i++){

        if((str[i] >= "A" && str[i] <= "a") || (str[i] >= "a" && str[i] <= "z") || (str[i] >= 0 && str[i] <= 9)){
            newStr += str[i];
        }
    }

    console.log(newStr);

}

rmSpeChar("hello@123!");
rmSpeChar("JS#is$cool");
rmSpeChar("!!!");