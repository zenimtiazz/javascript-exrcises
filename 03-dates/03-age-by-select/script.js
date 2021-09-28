/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   


    document.getElementById("run").addEventListener("click", event => {
        const dobDay = document.getElementById("dob-day").value;
        const dobMonth = document.getElementById("dob-month").value;
        const dobYear = document.getElementById("dob-year").value;
        const formatDob = dobMonth + "/" + dobDay + "/" +dobYear;
    
        const dateToday = new Date();
        const dateOfBirth = new Date(formatDob);
    
    
        const diff = dateToday.getTime() - dateOfBirth.getTime();
        const age = Math.floor(diff / 1000 / 60 / 60 /24/365.25);
        alert("Date of Birth is" +formatDob);
        alert("Age is "+ age);


    })



})();