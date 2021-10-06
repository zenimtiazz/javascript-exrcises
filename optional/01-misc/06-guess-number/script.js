
 var num = parseInt(Math.random() * 100 + 1);
 console.log(num);
function guess(){   
   
    var userGuess = prompt("input a guess number between 1 to 100");
    if(isNaN(userGuess)) {
      alert("Please, write a number");
    } else {
        if(num == userGuess){
            alert("Wow you guessed it :D");
        } else {
            alert("Not matched. Number was higher/Lower" + num);
            guess();
        }
    }
 
}
guess();
