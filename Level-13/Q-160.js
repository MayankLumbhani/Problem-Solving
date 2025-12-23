// Method - 01

function pangram(str){

    var str2 = str.toLowerCase().split("").sort().join("");

    let  newStr = "";
    for(let i = "a"; i <= "z"; i++){
        newStr = newStr + i;
    }

    if(str.includes(newStr)){
        console.log(true);
    }
    else{
        console.log(false);
    }


    // console.log(str2);

}

pangram("The quick brown fox jumps over a lazy dog");
pangram("Sphinx of black quartz, judge my vow");
pangram("Hello world");

// Method - 02

function pangram2(str){

    var str2 = str.toLowerCase().split("").sort().join("");


}