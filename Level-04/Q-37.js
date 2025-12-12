function revStr(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        newStr += str[str.length-1-i];
    }
    console.log(newStr);
}

revStr("hello");
revStr("abc");
revStr("a");


// Method - 2

function revStr2(str){
    let rev = str.split("");
    rev.reverse();
    let rev2 = rev.join("");
    console.log(rev2);
}

revStr2("javascript");