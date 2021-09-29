/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").addEventListener("input", function(){

        if(this.value.length == 10){
            this.setAttribute("maxlength", "10");
            //this.setAttribute("disabled", "disabled");
        }
        document.querySelector("#counter.indicator").innerHTML=this.value.length + "/10";
    
    
    })

})();
