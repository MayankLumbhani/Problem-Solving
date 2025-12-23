// Method  - 01

function replace(str){

    let str2 = ""

    for(let i = 0; i < str.length; i++){
        if(str[i] == "?"){
            str2 += "!";
        }
        else{
            str2 += str[i];
        }
    }
    console.log(str2);
}

replace("Are you ok?");
replace("???");
replace("No questions");

// Method - 02

function replace2(str){

    str = str.replaceAll("?","!");

    console.log(str);

}

replace2("Are you ok?");
replace2("???");
replace2("No questions");