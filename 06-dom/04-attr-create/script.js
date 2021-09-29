/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  
    const srcid = document.getElementById("source"); // access element using id
    const src = srcid.getAttribute("data-image"); //access element using attribute
    const to = document.getElementById("target"); //new element by id

    const imgElement = document.createElement("img"); // that creates a new image element
    imgElement.src=src; //use data image attribute

    target.appendChild(imgElement); // The appendChild() method appends a node as the last child of a node.
    srcid.remove();

})();
