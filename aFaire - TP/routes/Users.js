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

app.get('/signup',function(req,res){
  res.sendFile('index.html', { root: './views/Users/SignUp'});
});

app.get('/user/:id',function(req,res){
  config = req.params;
  dataLayer.configProfile(config,function(result){
    res.send(result);
  })
  res.sendFile('index.html', { root: './views/Users/Profile'});
});

// Ajout d'une tache dans la liste
app.post('/login',function(req,res){

    var user = {
        user : req.body.user,
        Pwd : req.body.pwd
    }

    dataLayer.findOneUser(user,function(result){
        res.send(result);
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
        Pseudo : req.body.pseudo,
        Pwd : req.body.pwd1
    }

    dataLayer.createAccount(account,function(lalistedeco){
        console.log("Compte Ajoutée.");
        res.send(lalistedeco);
    })
});

module.exports = app;
