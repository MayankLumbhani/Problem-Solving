function array(arrObj){
    
    let max = 0;
    let sName
    
    for(let i = 0; i < arrObj.length; i++){
        
        if(arrObj[i].marks > max){
            max = arrObj[i].marks;
            sName = arrObj[i].name;
        }
        
    }
    
    console.log(sName);
    
}

array([{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 70}]);
array([{name: "Neel", marks: 95}]);