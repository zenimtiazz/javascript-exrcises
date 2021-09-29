/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const targetImage = document.querySelector("figure img")// variable defined with constant cannot be reassigned or reedclared
    const hoverSrc =targetImage.getAttribute("data-hover");

targetImage.addEventListener("mouseover", function(){
    this.src=hoverSrc; //refer to object it belong
});

})();
