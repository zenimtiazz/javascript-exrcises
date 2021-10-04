/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  const generateRGB = () => {
      const num = Math.round(0xffffff * Math.random());
      const r = num >> 16;
      const g = num >> 8 & 255;
      const b = num & 255;
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
     
  
  
  document.getElementById("run").addEventListener("click", () => {
    document.body.style.backgroundColor = generateRGB();
  })
  
  
  
  })();