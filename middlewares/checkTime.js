//middleware per eventuali errori

function checkTime(err, req, res, next) {
    console.error("Internal server error", err);
    res.status(500)
    res.json({
    error: err.message,
    });
    };

    



function notFound (req, res, next) {
        res.status(404)
        res.json({
        error: "Not Found",
        message: "Pagina non trovata"
        });
        };

        
module.exports = {
    checkTime,
    notFound
};