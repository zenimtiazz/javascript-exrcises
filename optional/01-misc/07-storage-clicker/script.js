/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    const target = document.getElementById("target");
    const getNumber = () => localStorage.getItem("number");
    
    
    if ( getNumber() === null || getNumber() === "NaN"){
       localStorage.setItem("number" ,0);
    }
    else{
    target.innerHTML = getNumber();
    };
    
    document.getElementById("increment").addEventListener("click", ()=>{
      let newNum = parseInt(getNumber()) +1;
       localStorage.setItem("number" ,newNum);
      target.innerHTML = getNumber();
    })
    

})();
