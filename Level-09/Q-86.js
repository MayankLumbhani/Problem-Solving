function matrix(arr){
    
    let arr2 = [];
    
    for(let i = 0; i < arr.length; i++){
        
        let sum = 0;
        
        for(let j = 0; j < arr[i].length; j++){
            
            sum = sum + arr[i][j];
            
        }
        
        arr2.push(sum);
        
    }
    
    console.log(arr2);
    
}

matrix([[1, 2, 13], [24, 5, 6]]);

