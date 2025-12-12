// Method - 01

function replace(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] == "a"){
            newStr += "e";
        }
        else{
            newStr += str[i];
        }
    }
    console.log(newStr);
}

replace("banana");
replace("apple");
replace("cat");

// Method - 02


function replace2(str){
    str = str.replaceAll("a","e");
    console.log(str);
}

replace2("banana");
replace2("apple");
replace2("cat");