/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

    document.getElementById("run").addEventListener("click", () => {

        numbers.forEach((number, index) => {
            nodeItem = document.getElementById("n-" + (index+1));
            nodeItem.innerHTML=number;
        });

        document.getElementById("min").innerHTML=Math.min(...numbers);
        document.getElementById("max").innerHTML=Math.max(...numbers);

        const arrSum = arr => arr.reduce((a,b) => a + b, 0)


        document.getElementById("sum").innerHTML=arrSum(numbers);
        document.getElementById("average").innerHTML=arrSum(numbers)/10;

            


    });

})();
