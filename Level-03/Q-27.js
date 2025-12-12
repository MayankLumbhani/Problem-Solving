function prime(num){
    
    var check = true;
    let str = "";

        for(let i = 2; i <= num; i++){
            for(let j=2; j<i; j++){
                if(i%j == 0){
                    check = false;
                    break;
                }
                else{
                    check = true;
                }
            }
            if(check == true){
                str = str + i + " ";
            }
        }
        console.log(str);
}

prime(11);
prime(15);
