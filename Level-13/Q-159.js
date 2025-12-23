// Method - 01


function anagram(str1, str2){

    let obj1 = {};
    let obj2 = {};

    let newStr1 = str1.trim().split("").sort().join("").toString();
    let newStr2 = str2.trim().split("").sort().join("").toString();

    for(let i = 0; i < newStr1.length; i++){

        if(obj1[newStr1[i]] == undefined){
            obj1[newStr1[i]] = 1;
        }
        else{
            obj1[newStr1[i]]++;
        }

    }

    for(let j = 0; j < newStr2.length; j++){

        if(obj2[newStr2[j]] == undefined){
            obj2[newStr2[j]] = 1;
        }
        else{
            obj2[newStr2[j]]++;
        }

    }
    
    for(let key in obj1){
        if(obj1[key] != obj2[key]){
            console.log("Not Anagram");
            return;
        }
        else{
            continue;
        }
    }
    console.log("Anagram");

    // console.log(obj1);
    // console.log(obj2);

}

anagram("listen", "silent");
// anagram("Dormitory", "Dirty room");


// Method - 02


// function anagram2(str1, str2){

//     let newStr1

// }