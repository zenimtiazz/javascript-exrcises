/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let target = document.getElementById("target");
    let b1 = document.getElementById("part-one");
    let b2 = document.getElementById("part-two");
    let b3 = document.getElementById("part-three");
    let b4 = document.getElementById("part-four");
    let buttons = [b1, b2, b3, b4];

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let min = button.getAttribute("data-min")
            let max = button.getAttribute("data-max")
            let result = parseInt(button.innerHTML) + 1;
            if (result > max) {
                result = min
            }
            if (result < 10) {
                button.innerHTML = "0" + result;
            } else {
                button.innerHTML = result.toString();
            }
            target.innerText = "+" + b1.innerText + b2.innerText + b3.innerText + b4.innerText;

        })
    })


})();
