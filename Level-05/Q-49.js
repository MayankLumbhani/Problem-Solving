// Method - 01


function rmDigit(str){
    let check = true;
    let vowStr = "0123456789"
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

rmDigit("abc123");
rmDigit("Js 101 course");
rmDigit("2025");


// Method - 02

function rmDigit2(str){
    
    let newStr = "";
    let obj = {
        0 : 1,
        1 : 1,
        2 : 1,
        3 : 1,
        4 : 1,
        5 : 1,
        6 : 1,
        7 : 1,
        8 : 1,
        9 : 1
    }
    
    for(let i = 0; i < str.length; i++){
        if(obj[str[i]] == undefined){
            newStr = newStr + str[i];
        }
    }
    
    console.log(newStr);

}

rmDigit2("abc123");
rmDigit2("Js 101 course");
rmDigit2("2025");

