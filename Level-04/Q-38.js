function revStr(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        newStr += str[str.length-1-i];
    }
    if(str == newStr){
        console.log("Palindrome String");
    }
    else{
        console.log("Not a Palindrome String");
    }
}

revStr("madam");
revStr("racecar");
revStr("hello");

// Method - 2

function palindrome(str){
    let i = 0;
    let j = str.length-1;
    while(i<=j){
        if(str[i] != str[j]){
            console.log("Not Palindrome");
            return;
        }
        i++; 
        j--;
    }
    console.log("Palindrome");
}

palindrome("madam");
palindrome("racecar");
palindrome("hello");
