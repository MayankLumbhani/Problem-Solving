function consonantsCount(str){

let vowels = "aeiouAEIOU";
let count = 0;

for(let i = 0; i < str.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if(str[i] == vowels[j]){
            count = count + 1;
        }
    }
        if(str[i] == " "){
            count = count + 1;
        }
}
let newCount = str.length - count;

console.log(newCount);
}

consonantsCount("hello");
consonantsCount("abc");
consonantsCount("a e i");
