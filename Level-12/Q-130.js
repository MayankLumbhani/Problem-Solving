function coPrime(a,b){

    let min = a>b ? b : a;

    for(let i = 2; i <= min; i++){
        if(a%i == 0 && b%i == 0){
            return false;
        }
    }
    return true;

}

console.log(coPrime(12,18));