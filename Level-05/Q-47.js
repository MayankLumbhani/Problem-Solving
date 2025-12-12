//  Method - 1

function lowerCase(str){
    let count = 0;

    for(let i = 0; i < str.length; i++){
            if(str[i] >= 'a' && str[i]<='z'){
                count++;
            }
    }
    console.log(count);
}

lowerCase("HeLLo");
lowerCase("JAVASCRIPT");
lowerCase("Js 101");

