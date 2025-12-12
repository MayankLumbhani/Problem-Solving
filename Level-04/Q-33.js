function vowelsCount(str){

let vowels = "aeiouAEIOU";
let count = 0;

for(let i = 0; i < str.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if(str[i] == vowels[j]){
            count = count + 1;
        }
    }
}
console.log(count);
}

vowelsCount("hello");
vowelsCount("JAVASCRIPT");
vowelsCount("sky");