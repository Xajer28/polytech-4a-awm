var app = require('express').Router();
var dataLayer = require('../dataLayer.js');
app.get('/',function(req,res){
    res.sendFile('index.html', { root: './views/Users/LogIn'});
});

app.get('/api/lalistedeco',function(req,res){
    dataLayer.getAccountSet(function(dtSet){
        res.send(dtSet);
    })
});


// Ajout d'une tache dans la liste
app.post('/createAccount',function(req,res){

    console.log(req.body);

    var account = {
        Sexe :req.body.sexe,
        Nom : req.body.nom,
        Prenom :req.body.prenom,
        Langue : req.body.lang,
        Pwd : req.body.pwd1
    }

    dataLayer.createAccount(account,function(lalistedeco){
        console.log("Compte Ajoutée.");
        res.send(lalistedeco);
    })
});

module.exports = app;
