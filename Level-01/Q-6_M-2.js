function result(num){

    if(num>100){
        console.log('Enter valid marks.');
    }

    else{

    let marks = Math.floor(num/10);

switch(marks){

    case 10 : console.log('A grade');
    break;
    
    case 9 : console.log('A grade');
    break;
    
    case 8 : console.log('B grade');
    break;
    
    case 7 : console.log('C grade');
    break;
    
    case 6 : console.log('D grade');
    break;

    default :
    console.log('F grade');
    }

    }

}

result(95);

