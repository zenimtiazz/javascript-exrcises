/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const getHeroes = async ()=>{
        const response = await fetch('../../_shared/api.json');
        return await response.json();
    }

    const displayHeroesFromTemplate = async (templateID, targetID) =>{
        const target = document.getElementById(targetID);
        const template = document.getElementById(templateID);
        const heroes = await getHeroes();
        for (h of heroes){
           let newNode =  template.content.cloneNode(true);
           newNode.querySelector('.name').innerText=h.name;
           newNode.querySelector('.alter-ego').innerText=h.alterEgo;
           newNode.querySelector('.powers').innerText=h.abilities.join(", ");
            target.appendChild(newNode);
        }
    }

    document.getElementById("run").addEventListener("click", ()=> {
        displayHeroesFromTemplate("tpl-hero", "target");
    });

})();
