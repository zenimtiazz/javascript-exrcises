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
        return response.json();
    }

    const getHeroeByID = async (heroeID) => {
        const heroes = await getHeroes();
        const match = Object.values(heroes)[0].filter((heroe) => heroe.id == heroeID );
        return match
    }

    const displayHeroeFromTemplateByID = async (heroeID, templateID, targetID) =>{
        const target = document.getElementById(targetID);
        const template = document.getElementById(templateID);
        const heroe = await getHeroeByID(heroeID);

        let newNode =  template.content.cloneNode(true);
        newNode.querySelector('.title').innerText=heroe[0].name;
        newNode.querySelector('.powers').innerText=heroe[0].abilities.join(", ");
        target.appendChild(newNode);
    }

    document.getElementById("run").addEventListener("click", ()=>{
        const value = document.getElementById("hero-id").value;
        displayHeroeFromTemplateByID(value, "tpl-hero", "target");
    });
})();
