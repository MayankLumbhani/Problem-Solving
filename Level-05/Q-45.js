// Method - 1

function countDig(str){
    let count = 0;
    let digStr = "0123456789";
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < 10; j++){
            if(str[i] == digStr[j]){
                count++;
            }
        }
    }
    console.log(count);
}

countDig("abc123");
countDig("2025 year");
countDig("no digits");

// Method - 2 

function countDig2(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] >= '0' && str[i] <= '9'){
            count++;
        }
    }
    console.log(count);
}

countDig2("abc123");
countDig2("2025 year");
countDig2("no digits");

// Method - 3

function countDig3(str){
    let count = 0;
    digStr2 = "0123456789";
    for(let i = 0; i < str.length; i++){
        if(digStr2.includes(str[i])){
            count++;
        }
    }
    console.log(count);
}

countDig3("abc123");
countDig3("2025 year");
countDig3("no digits");