// let http = require('http');

// let serveur = http.createServer(function (requete, res) {
//     //console.log(requete);
//     if (requete.url === '/') {
//         res.end('Bienvenue sur notre site !');
//     } else if (requete.url === '/contact') { 
//         res.end("Contactez-nous à l'adresse dkrtr@fgfr.fr");
//     }   else {
//         res.end('la page est inexistante.');
//     }                                       
// });                                                                     
// serveur.listen(3000);
// console.log('serveur démarré - écoute sur port 3000');



let express = require('express');
let serveur = express();

serveur.get('/', (req, res) => {
    // console.log("requete sur '/'");
    res.send(`
        <form action="/reponse" method="POST">
        <p>Combien font 2 + 2 ?</p>
        <input name="reponseDonnee" autocomplete="off">
        <button>envoyer</button>
        </form>
    `);
});

serveur.post('/reponse', function (req, res) {
    //res.send('Bien reçu!');
    //résupérer la valeur du formulaire;
    //console.log(req.body, reponseDonnee);
    if (req.body.reponseDonnee === '4') {
    res.send ( `Bravo ! <br>
    <a href='/'>Retour à l accueil</a>` );
    } else {
    res.send ( `Perdu ! <br> 
    <a href='/'>Retour à l accuei</a>` );
    }
});

serveur.get('/reponse', (req,res) => {
    res.send('Etes-vous perdu?');
})

serveur.listen(3000);
console.log("écoute sur port 3000");


console.log("Coucou !");