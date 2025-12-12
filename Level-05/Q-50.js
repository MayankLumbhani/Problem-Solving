// Method - 01


function toggleChar(str){
    
    newStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            newStr += str[i].toLowerCase();
        }
        else if(str[i] >= 'a' && str[i] <= 'z'){
            newStr += str[i].toUpperCase();
        }
        else{
            newStr += str[i];
        }
    }
    console.log(newStr);
}

toggleChar("HeLLo");
toggleChar("abcDEF");
toggleChar("Js 101");


// Method - 02


function toggleChar2(str){

    let newStr = "";

for(let i = 0; i < str.length; i++){
    
    let ascii = str.charCodeAt(i);
    
    if(ascii >= 65 && ascii <= 90){
        ascii = ascii + 32;
    }
    else if(ascii >= 97 && ascii <= 122){
        ascii = ascii - 32;
    }
    
    newStr = newStr + String.fromCharCode(ascii);
    
}

console.log(newStr);

}

toggleChar2("HeLLo");
toggleChar2("abcDEF");
toggleChar2("Js 101");


// Method - 03


function toggleChar2(str){

let newStr = "";

for(let i = 0; i < str.length; i++){
    
    if(str[i] == str[i].toLowerCase()){
        newStr += str[i].toUpperCase();
    }
    else{
        newStr += str[i].toLowerCase();
    }
    
}

console.log(newStr);

}

toggleChar2("HeLLo");
toggleChar2("abcDEF");
toggleChar2("Js 101");