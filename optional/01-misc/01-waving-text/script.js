/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const minFontSizePixels = 12;
    // const fontSizeSteps = (wordcount, maxFontsizeAddition) => maxFontsizeAddition/wordcount;
     const highRes = true;
     const separator = (highRes) ? "": " ";
     
     
     const textElement = document.getElementById("target");
     
     let textArr = textElement.innerText.split(separator);
 
     
 
     let shift = 0;
 
     setInterval(()=>{
 
         textElement.innerHTML = textArr.map((word, index)=>{
 
             if (++shift >= textArr.length/2) {
                 shift = 0;
             }
             return `
             <span style="font-size:${(shift + minFontSizePixels)}px">${word}</span>
             `
         }).join(separator);
 
     }, 100);
 
  
})();
