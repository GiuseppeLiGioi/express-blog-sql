const arrPosts = require('../data/data'); 


function index(req, res) {
    let filteredPosts = arrPosts;
// Se la richiesta contiene un filtro, allora filtriamo i posts
if (req.query.title) {
filteredPosts = arrPosts.filter(
post => post.title.includes(req.query.title)
);
}
// restituiamo la variabile filteredPosts
// potrebbe essere stata filtrata o contenere il menu-post originale
res.json(filteredPosts);
};

function show(req, res) {
    const id = parseInt(req.params.id)
    // cerchiamo il post tramite id
    const post = arrPosts.find(post => post.id === id);
    // Restituiamolo sotto forma di JSON
    res.json(post);
};






function store(req, res) {
    //creiamo un nuovo id incrementando l'ultimo id presente
    const newId = arrPosts[arrPosts.length - 1].id + 1;

    //creiamo il nuovo oggetto post
    const newPost = {
        id: newId,  
      title: req.body.title,
      slug: req.body.slug,
      content: req.body.content,
      image: req.body.image,
      tags: req.body.tags
    }

    //aggiungiamo il nuovo post all'array dei posts
    arrPosts.push(newPost);

    //verifichiamo
    console.log(arrPosts);

    //restituiamo lo status corretto ed il post appena creato.
    res.status(201);
    res.json(newPost);

    }







function update(req, res) {
    //recuperiamo l'id dall'URL e trasformiamolo in numero con il paresInt
    const id = parseInt(req.params.id);
    

    //cerchiamo il post tramite id
    const post = arrPosts.find(post => post.id === id);

    //facciamo un piccolo controllo, bonus part 
    if (!post){
        res.status(404);

        return res.json({
            error:"Not Found",
            message:"Post non trovato"
        })
    }

    //aggiorniamo il post
    post.title = req.body.title;
    post.slug = req.body.slug;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    //controlliamo l'array dei post
    console.log(arrPosts);
    //restituiamo il post appena aggiornato
    res.json(post);
}







function destroy(req, res) {
    const id = parseInt(req.params.id)
    // cerchiamo il pizza tramite id
    const post = arrPosts.find(post => post.id === id);
    // Piccolo controllo
    if (!post) {
    return res.status(404).json({
    status: 404,
    error: "Not Found",
    message: "post non trovato"
    })
    }
    // Rimuoviamo la pizza dal menu
    arrPosts.splice(arrPosts.indexOf(post), 1);
    // Verifichiamo sul terminale
    console.log(arrPosts);
    // Restituiamo lo status corretto
    res.sendStatus(204)
    };

// esportiamo tutto
module.exports = { index, show, store, update, destroy }