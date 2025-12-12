function strLen(strArr){
    
    let lenArr = [];
    
    for(let i = 0; i < strArr.length; i++){
        lenArr.push(strArr[i].length);
    }
    
    console.log(lenArr);
    
}

strLen(["hi", "hello", "a"]);
strLen(["JS", "is", "cool"]);
strLen([]);