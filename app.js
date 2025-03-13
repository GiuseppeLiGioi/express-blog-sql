const express = require ("express");
const app= express();
const port = 3000;
const postsRouter = require ('./routers/posts')

const {checkTime, notFound} = require("./middlewares/checkTime"); // Importa il middleware

//per mettere le immagini, faccio riferiemnto alla cartella public
app.use(express.static ('public'));


//body-parser: importante per tradurre le body-request
app.use(express.json());


app.post("/", (req, res) => {
    // dentro req.body troveremo
    // i dati ricevuti in formato json
    console.log("Body:", req.body);
    res.send("Dati ricevuti!");
});


app.get("/errore", (req, res, next) => {
    const errore = new Error("Qualcosa è andato storto!");
    next(errore); // Passa l'errore al middleware
});


app.get("/" , (req, res)=>{
    res.type('html').send(
     
    )
});


app.use("/api/posts", postsRouter)


app.use(checkTime);

app.use(notFound);

//connessione alla porta 3000 del server
app.listen(port, ()=>{
    console.log("connessione al server alla porta 3000");
})