function lowerCase(str){
    let str2 = "";
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            str2 = str2 +  String.fromCharCode(str.charCodeAt(i)+32) 
        }
        else{
            str2 = str2 + str[i];
        }
    }
    console.log(str2);
}

lowerCase("HELLO");
lowerCase("Js");
lowerCase("123ABC");
