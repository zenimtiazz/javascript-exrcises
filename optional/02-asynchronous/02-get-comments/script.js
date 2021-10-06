/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const getPosts = (err, articles) => {
        articleItem = articles.map((article)=>{
           const articleID = article.id;
         window.lib.getComments(articleID, addComments);
         return articleID;
       });
   }
   
   const addComments = (err, comment) =>{
       articleItem.comments = comment;
       console.log(articleItem);
   }
   
   document.getElementById("run").addEventListener("click", ()=>{
       window.lib.getPosts(getPosts);
   });
})();
