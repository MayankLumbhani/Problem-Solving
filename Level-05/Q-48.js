// Method - 01

function rmVowels(str){
    let check = true;
    let vowStr = "aeiouAEIOU"
    newStr = "";
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vowStr.length; j++){
            if(str[i] == vowStr[j]){
                check = false;
                break;
            }
            else{
                check = true;
            }
        }
        if(check == true){
            newStr += str[i];
        }
    }
    
    console.log(newStr);
}

rmVowels("hello");
rmVowels("JavaScript");
rmVowels("AEIOU");


// Method - 02


function rmVowels2(str){
    let vowStr = "AEIOUaeiou"
    let newStr = "";
    let check;

    for(let i = 0; i < str.length; i++){
        if(vowStr.includes(str[i])){
            check = true;
        }
        else{
            check = false;
        }
        if(check == false){
            newStr = newStr + str[i];
        }
    }
    console.log(newStr)
}

rmVowels2("hello");
rmVowels2("JavaScript");
rmVowels2("AEIOU");


// Method - 03


function rmVowels3(str){
    
    let newStr = "";
    let obj = {
        A : 1,
        a : 1,
        E : 1,
        e : 1,
        I : 1,
        i : 1,
        O : 1,
        o : 1,
        U : 1,
        u : 1
    }
    
    for(let i = 0; i < str.length; i++){
        if(obj[str[i]] == undefined){
            newStr = newStr + str[i];
        }
    }
    console.log(newStr);

}


rmVowels3("hello");
rmVowels3("JavaScript");
rmVowels3("AEIOU");
