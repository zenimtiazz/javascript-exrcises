/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () =>{

        const passwordOneField = document.getElementById("pass-one");
        const passwordTwoField = document.getElementById("pass-two");
        const errorBorderColor = "red";
        
        if(passwordOneField.value != passwordTwoField.value){
            passwordOneField.style.borderColor=errorBorderColor;
            passwordTwoField.style.borderColor=errorBorderColor;
        }
        
        });

})();
