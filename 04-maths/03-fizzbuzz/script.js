

(function() {

    const hasRest = (number, facor) => number%facor == 0;
    
    for(number = 1; number <=100; number++){
    
    if(hasRest(number, 3) && hasRest(number, 5)){
        console.log("fizzbuzz");
    }
    else if(hasRest(number, 5)){
        console.log("buzz");
    }
    else if(hasRest(number, 3)){
        console.log("fizz");
    }
    else{
        console.log(number);
    }
       
    }
    
    })();
