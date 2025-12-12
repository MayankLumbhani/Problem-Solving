function rmSpace(str){
    let newStr = "";
    for(let i  = 0; i < str.length; i++){
        if(str[i] != " "){
            newStr += str[i];
        }
    }
    console.log(newStr);
}

rmSpace("hello world");
rmSpace("  a b  c  ");
rmSpace("no_spaces");


// Method - 2

function rmSpace2(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] == " "){
            continue;
        }
        newStr = newStr + str[i];
    }
    console.log(newStr);
}

rmSpace2("hello world");
rmSpace2("  a b  c  ");
rmSpace2("hello world");

// Method - 3

function rmSpace3(str){
    let arr = str.split(" ");
    // console.log(arr);
    let newStr = arr.join("");
    console.log(newStr);
}

rmSpace3("hello world");
rmSpace3("  a b  c  ");
rmSpace3("hello world");