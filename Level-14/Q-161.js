function count(arr){

    let pCount = 0;
    let nCount = 0;
    let zCount = 0;
    for(let i = 0; i  < arr.length; i++){
        if(arr[i] > 0){
            pCount++;
        }
        else if(arr[i] < 0){
            nCount++;
        }
        else{
            zCount++;
        }
    }
    console.log(`Positive = ${pCount}`);
    console.log(`Negative = ${nCount}`);
    console.log(`Zero = ${zCount}`);

}

count([1, -2, 0, 5, -3]);
count([-1, -2, -3]);
count([0, 0, 0]);