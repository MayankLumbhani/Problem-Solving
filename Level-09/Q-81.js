function square(num){
    
    for(let i = 1; i <= num; i++){
            let str = "";

        for(let j = 1; j <= num; j++){
            str = str + "* ";
        }
        console.log(str);
    }
}

square(5);