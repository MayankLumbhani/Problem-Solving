// Method - 01

function wordCount(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] != " " && str[i+1] == " "){
            count++;
        }
    }
            if(str[str.length-1] != " "){
            count++;
        }
    
    console.log(count);
}

wordCount("Hello world");
wordCount("JavaScript is fun");
wordCount("  this   is   spaced  ");


// Method -02

function wordCount2(sentence){

    let count = sentence.trim().split(/\s+/).length;

    console.log(count);

}

wordCount2("Hello   world   from   JavaScript");

