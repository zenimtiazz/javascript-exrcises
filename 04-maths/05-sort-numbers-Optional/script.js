/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  

    document.getElementById("run").addEventListener("click", ()=> {

        const number = document.getElementById("numbers");

        const sorted = number.value
        .split(', ')
        .sort((a,b) => a -b );

        const newString = sorted.join(", ");

        number.value=newString;

    });

})();