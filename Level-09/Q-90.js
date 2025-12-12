function longestStr(strArr){
    
    let lenStr = [];
    
    for(let i = 0; i < strArr.length; i++){
        lenStr.push(strArr[i].length);
    }
    
    let max = lenStr[0];
    let index = 0;
    
    let j;
    for(j = 1; j < lenStr.length; j++){
        if(lenStr[j] > max){
            max = lenStr[j];
            index = j;
        }
    }
    
    console.log(strArr[index]);

}

longestStr(["hi", "hello", "hey"]);
longestStr(["a", "ab", "abc"]);
longestStr(["same", "size"]);