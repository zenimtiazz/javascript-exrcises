/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target");

    let i1 = document.getElementById("part-one");
    let i2 = document.getElementById("part-two");
    let i3 = document.getElementById("part-three");
    let i4 = document.getElementById("part-four");
    let inputs = [i1, i2, i3, i4];

    let b1 = document.getElementById('fix-part-one');
    let b2 = document.getElementById('fix-part-two');
    let b3 = document.getElementById('fix-part-three');
    let b4 = document.getElementById('fix-part-four');
    let buttons = [b1, b2, b3, b4];

    inputs.forEach(input => {
        input.interval = setInterval(function(){
            let max = parseInt(input.getAttribute("data-max"));
            let min = parseInt(input.getAttribute("data-min"));
            let result = Math.floor(Math.random() * (max - min + 1)) + min;
            if (result < 10) {
                input.value = "0" + result;
            } else {
                input.value = result.toString();
            }
            return result;
        }, 200);
    })

    let numbers = []

    buttons.forEach((button, i) => {
        button.addEventListener('click', function (){
            clearInterval(inputs[i].interval);
            numbers[i] = inputs[i].value;
            target.innerText = "+" + numbers.join('');
        })
    })

})();
