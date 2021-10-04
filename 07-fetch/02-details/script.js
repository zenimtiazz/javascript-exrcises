/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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
        for (heroe of heroes.heroes){
           let newNode =  template.content.cloneNode(true);
           newNode.querySelector('.name').innerText=heroe.name;
           newNode.querySelector('.alter-ego').innerText=heroe.alterEgo;
           newNode.querySelector('.powers').innerText=heroe.abilities.join(", ");
            target.appendChild(newNode);
        }
    }

    document.getElementById("run").addEventListener("click", ()=> {
        displayHeroesFromTemplate("tpl-hero", "target");
    });


})();

