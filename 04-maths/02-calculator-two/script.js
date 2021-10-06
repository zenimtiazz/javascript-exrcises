/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function test() {

    return true;
}

(function() {

  

    document.querySelector("actions").addEventListener("click", (event)=>{
        doOperation(event.target.id);
    });


    const doOperation = (operation) => {
        const opOne = parseInt(document.getElementById("op-one").value);
        const opTwo = parseInt(document.getElementById("op-two").value);
        switch (operation){
            case "addition":{
                alert (opOne + opTwo);
                break;
            }
            case "substraction":{
                alert (opOne - opTwo);
                break;
            }
            case "division":{
                alert (opOne / opTwo);
                break;
            }
           default:{
            alert (opOne * opTwo);
           }
        }
    }

    return true;
})();