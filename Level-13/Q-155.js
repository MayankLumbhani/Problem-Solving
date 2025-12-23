function onlyLet(str){

    for(let i = 0; i < str.length; i++){
        if((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z")){
            continue;
        }
        else{
            console.log(false);
            return;
        }
    }

    console.log(true);

}

onlyLet("Hello");
onlyLet("Hello123");
onlyLet("Hello world");
