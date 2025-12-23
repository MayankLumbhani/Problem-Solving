function strLen(arr){
    
    let i = 0;
    let lenArr = [];
    
    while(arr[i] != undefined){
        i++;
    }
    
    let k;
    
    for(let j = 0; j < i; j++){
        str = arr[j];
        k = 0;
        while(str[k] != undefined){
            k++;
        }
        lenArr.push(k);
    }
    
    console.log(lenArr);
    
}

strLen(["hi", "hello", "a"]);
strLen(["JS", "is", "cool"]);
strLen([]);