// Ce script décrit les actions effectués pour traiter les données du site dans le serveur
//"Partie Business"


// Serveur Web
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


//DataLayer : Lien vers le fichier de tranfert
var dataLayer = require("./config/dataLayer.js");
var morgan = require('morgan'); //Morgan : Logger, crée les fichiers logs



//init parser
app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json()); //to support JSON encoded bodies
app.use(bodyParser.json({ type : 'application/vnd.api+json'}));

//Démarre l'appication après que la connexion aves la base de données soit prête
dataLayer.init(function(){
    console.log('init');
    app.listen(3000);
    console.log("Rendez-vous au port 3000");
});


app.get('/',function(req,res){
    res.sendFile('/public/index.html');
});

// Récupération de la liste
app.get('/getTaskSet',function(req,res){
    dataLayer.getTaskSet(function(laliste){
        res.send(laliste);
    })
});
