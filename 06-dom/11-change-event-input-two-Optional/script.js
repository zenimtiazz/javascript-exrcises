/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let validLength = false;
    let validChars = false;
    const validIndicator =  document.querySelector("#validity.indicator");
    document.getElementById("pass-one").addEventListener("input", function(){
        validLength = (this.value.length >= 8) || false;
        validChars = (this.value.replace(/[^0-9]/g,"").length >= 2) || false;
        validIndicator.innerHTML = (validLength && validChars) ? "ok": "Not ok";
    })

})();
