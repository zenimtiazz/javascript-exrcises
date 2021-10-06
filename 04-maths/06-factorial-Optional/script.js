(function() {

document.getElementById("run").addEventListener("click", ()=> { // button functionality
    let num =document.getElementById("number").value //let is used to declare variable in javascript
    if (num == 0 || num == 1) // compare values
        num= 1;
    
    for (var i = num - 1; i >= 1; i--) {
              num *= i;
        }
        
   console.log(num);
         } )
        })();