/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{


        const tryGetPerson = async () => {
           let persons;
           try{
            persons = await window.lib.getPersons();
           }
           catch(msg){
            console.error("Custom message. Following error returned: " + msg);
           }
           if(persons) console.log(persons);
        }
        
        tryGetPerson();
        
        
        
        })
})();
