function fibonacci(num){
     let first = 0;
     let second = 1;
     let next = 0;
     let str = "";
     for(let i = 1; i <= num; i++){
         str = str + next + " ";
         first = second;
         second = next;
         next = first + second;
     }
     console.log(str);
}

fibonacci(7);