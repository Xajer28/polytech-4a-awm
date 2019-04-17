var app = require('express').Router();

app.get('/',function(req,res){
    res.sendFile('index.html', { root: './views/Users'});
});

// Ajout d'une tache dans la liste
app.post('/createAccount',function(req,res){

    console.log("Parametre Reçu = "+req.body.text);

    var account = {
        username : req.body.text,
        password :req.body.Password
    }

    dataLayer.createAccount(account,function(lalistedeco){
        console.log("Compte Ajoutée.");
        res.send(lalistedeco);
    })
});

module.exports = app;
