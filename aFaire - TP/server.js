// Ce script décrit les actions effectués pour traiter les données du site dans le serveur
//"Partie Business"


// Serveur Web
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//DataLayer : Lien vers le fichier de tranfert
var dataLayer = app.require("./dataLayer.js");

var morgan = require('morgan'); //Morgan


app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json()); //to support JSON encoded bodies
app.use(bodyParser.json({ type : 'application/vnd.api+json'}));

app.get('/',function(req,res){
    res.sendFile('/public/index.html');
});

// Récupération de la liste
app.get('/api/laliste',function(req,res){
    Liste.find(function(err,laliste){
        if(err) res.send(err);
        res.json(laliste);
    })
});

// Ajout de l'élément dans la liste
app.post('/api/laliste',function(req,res){
    Liste.create({
        text : req.body.text,
        done : false
    }, function (err,liste){
        if (err) res.send(err);
        Liste.find(function(err,laliste){
            if(err) res.send(err);
            res.json(laliste);
        });
    });
});

// Supprimer un élément de la liste
app.delete('/api/laliste/:liste_id', function(req,res){
    Liste.deleteOne({
        _id : req.params.liste_id 
    },function(err,liste){
        if(err) res.send(err);
        Liste.find(function (err, laliste){
            if(err) res.send(err);
            res.json(laliste);
        });
    });
});

//Choix de l'ouverture du port
app.listen(8080);
console.log("Rendez-vous au port 8080");