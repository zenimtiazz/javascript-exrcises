/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        const results = [];
        for(number = 1; number <= 21; number++){
            results.push(Math.pow(number, 2));
        }

        results.map(number => {
            document.write("<li>" + number + "</li>");
        })
    });

})();