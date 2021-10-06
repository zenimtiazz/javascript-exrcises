/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{



        const getPosts = async () => {
           
            return await window.lib.getPosts()
        }
        const getCommentsByPostId = async (id) => {
            
            return await window.lib.getComments(id)
        }

        const displayPostItems = async () => {
            const posts = await getPosts();
            let postItems = [];
            for (post of posts){
                post.comments = await getCommentsByPostId(post.id);
                postItems = [...postItems, post];
            }
            console.table(postItems);
        }

        displayPostItems();
    });
})();
