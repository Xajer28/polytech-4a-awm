var app = require('express').Router();
var dataLayer = require('../dataLayer.js');
app.get('/',function(req,res){
    res.sendFile('index.html', { root: './views/Users'});
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
        username : req.body.newuser,
        password :req.body.newpwd
    }

    dataLayer.createAccount(account,function(lalistedeco){
        console.log("Compte Ajoutée.");
        res.send(lalistedeco);
    })
});

module.exports = app;
