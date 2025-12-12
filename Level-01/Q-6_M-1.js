function grade(marks){
    if(marks>=0 && marks <= 100){
        if(marks>=90 && marks<=100){
            console.log("A grade");
        }
        else if(marks>=80 && marks<=89){
            console.log("B grade");
        }
        else if(marks>=70 && marks<=79){
            console.log("C grade");
        }
        else if(marks>=60 && marks<=69){
            console.log("D grade");
        }
        else if(marks>=0 && marks<=59){
            console.log("F grade");
        }
    }
    else{
        console.log("Please enter valid marks.");
    }
}

grade(80);