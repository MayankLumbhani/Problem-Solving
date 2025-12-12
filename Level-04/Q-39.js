function countA(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "a" || str[i] == "A"){
            count++;
        }
    }
    console.log(count);
}

countA("banana");
countA("Apple");
countA("xyz");