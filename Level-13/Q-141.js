function character(str){
    
    if(str.length%2 == 1){
        console.log(str[(str.length-1)/2]);
    }
    else{
        let a = str[(str.length)/2-(1)];
        a = a + str[(str.length)/2];
        console.log(a);
    }
    
}

character("abc");
character("test");
character("A");