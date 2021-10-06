/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{

        const getPosts = window.lib.getPosts();
        const getComments = (id) => window.lib.getComments(id);    
    
        const displayPostItem = postItem =>{
            console.log(postItem);
        }
    
        getPosts
        .then(articles=>{
             return  articles.map(article=>{
                return {article, "comments":getComments(article.id)};
            });
        })
        .then(resp=>{
            resp.forEach(article => {
                const post = article.article;
                article.comments.then(comments=>{
                    const output = {post,comments};
                    displayPostItem(output);
                })
            });
        });
    
        });
    
})();
