// Method - 01

function fWord(str){

    let str2 = ""

    if(str[0] != " "){
    str2 += str[0];
    }


    for(let i = 1; i < str.length; i++){
        
        
        if(str[i-1] != " " && str[i] == " "){
            break;
        }
        else{
            if(str[i] == " "){
                continue;
            }
            
            str2 = str2 + str[i];
        }
    }

    console.log(str2);

}

fWord("   Hello world");
fWord("JavaScript is fun");
fWord("SingleWord");

// Method - 02

function fWord2(str){

}