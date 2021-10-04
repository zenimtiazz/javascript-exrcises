/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  
        const targetElement = document.getElementById("target");
        const textString = targetElement.innerHTML;
        const textLetters = targetElement.innerHTML.split("");
        
        
        targetElement.innerText="";
        
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        
        
          let finished = false;
          let index = 0;
          function typer() {
            
            let speedVariation = getRandomInt(5, 120);
            targetElement.innerHTML= targetElement.innerHTML + textLetters[index];
        
            finished = (index +1 == textLetters.length) ? true :false;
        
            if(!finished){
            index++;
            setTimeout(typer,speedVariation);
            }
        }
        
        typer();
        
        })();

