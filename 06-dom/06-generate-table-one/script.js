/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  
    const target = document.getElementById("target");
    
   
    
    const table = document.createElement("table"); //create elements for table
    const tableRow = document.createElement("tr"); // creates rows for element
    target.appendChild(table); // Create a table, and append it to the end of the document body
    
    for(let rows = 0; rows < 10; rows++){ // creates a row
        let newRow = table.insertRow(); // insert new row
        let newCell = newRow.insertCell(); // inser cell
        newCell.appendChild(document.createTextNode(rows + 1)); // put something in parent element
    
    }
    

})();
