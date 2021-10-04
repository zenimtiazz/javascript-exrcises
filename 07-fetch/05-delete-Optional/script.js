/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', function() {

        fetch('../../_shared/api.json')
            .then(response => response.json())
            .then(data =>  {
                let heroes = data.heroes;
                let heroId = document.getElementById('hero-id').value
                if (heroId <= heroes.length && heroId > 0) {
                    
                    heroes.splice((heroId - 1), 1);
                    console.log(heroes);
                  
                } 
                else {
                    alert("Enter an ID number between 1 and 5");
                }
            })
    })

})();
