

(function() {

    const odd = (a, b) => a%b == 0; 
    
    for(number = 1; number <=100; number++){
    
    if(odd(number, 3) && odd(number, 5)){ 
        console.log("fizzbuzz");
    }
    else if(odd(number, 5)){
        console.log("buzz");
    }
    else if(odd(number, 3)){
        console.log("fizz");
    }
    else{
        console.log(number);
    }
       
    }
    
    })();
