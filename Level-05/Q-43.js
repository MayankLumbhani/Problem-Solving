// Method - 01

function character(str,ch){
    let check = true;
    for(let i = 0; i < str.length; i++){
        if(str[i] == ch){
            check = true;
            console.log(check);
            break;
        }
        else{
            check = false;
        }
    }
    if(check == false){
        console.log(check);
    }
}

character("hello","e");
character("hello","a");
character("Javascript","S");

// Method - 02

function character2(str,ch){
    
    let check;
    check = str.includes(ch);
    if(check){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

character2("hello","e");
character2("hello","a");
character2("Javascript","S"); //  ==> False, because case sensitive 
