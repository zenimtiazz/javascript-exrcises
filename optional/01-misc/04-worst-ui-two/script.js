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


    function addLeadingZeros(num, size) {
     
        let s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }

    const increaseNumber = (start, min, max) => {
        if (start >= max || start < min) {
            return start;
        }
        return ++start;
    }

    const hotButtonsIDS = [
        "part-one",
        "part-two",
        "part-three",
        "part-four"
    ];

    const updateText = () => {
        const text = document.querySelector(".actions").innerText.replace(/(\r\n|\n|\r)/gm, "");
        document.getElementById("target").innerHTML = "+" + text;
    }



    hotButtonsIDS.forEach((buttonID) => {
        document.getElementById(buttonID).addEventListener("click", () => {
            const button = document.getElementById(buttonID);
            const min = button.getAttribute("data-min");
            const max = button.getAttribute("data-max");
            const curr = button.innerHTML;
            button.innerHTML = addLeadingZeros(increaseNumber(curr, min, max), 2);
            updateText();
        });
    })

})();
