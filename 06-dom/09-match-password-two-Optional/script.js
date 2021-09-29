/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", () =>{

        const passwordOneField = document.getElementById("pass-one");
        const passwordTwoField = document.getElementById("pass-two");
        
        if(passwordOneField.value != passwordTwoField.value){
            passwordOneField.classList.add("error");
            passwordTwoField.classList.add("error");
        
        }
        
        });

})();
