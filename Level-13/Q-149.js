// Method - 01

function fWord(str){

    let strArr = str.split("");
    strArr.reverse();
    let revStr = strArr.join("");

    let str2 = ""

    if(revStr[0] != " "){
    str2 += revStr[0];
    }


    for(let i = 1; i < revStr.length; i++){
        
        
        if(revStr[i-1] != " " && revStr[i] == " "){
            break;
        }
        else{
            if(revStr[i] == " "){
                continue;
            }
            
            str2 = str2 + revStr[i];
        }
    }

    // console.log(str2);

    let strArr2 = str2.split("");
    strArr2.reverse();
    let revStr2 = strArr2.join("");

    console.log(revStr2);  
}

fWord("   Hello world  ");
fWord("JavaScript is fun  ");
fWord("SingleWord");

// Method - 02

function fWord2(str){

}