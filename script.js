/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const askAgain = true;
    while(askAgain == true){
    const age = prompt("What is your age?");
    const sex = prompt("What is your sex? (male/neutral/female)");
    const town = prompt("What is your hometown?");
    
    const confirmDialog = confirm(`
    Is the following information correct?
    Age : ${age}
    Sex: ${sex}
    Town: ${town}
      `);
      if (confirmDialog){
          askAgain = false;
      }
    }
    
    
})();
