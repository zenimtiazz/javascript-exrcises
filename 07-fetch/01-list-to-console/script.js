/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const getItems = async function (url)
    {
        const response = await fetch(url);
        const json =  await response.json();
        console.log(json);
    }

    document.getElementById("run").addEventListener("click", ()=> {
        getItems('../../_shared/api.json');
    });

})();

