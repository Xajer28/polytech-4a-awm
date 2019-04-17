// Ce script décrit les actions effectués pour traiter les données
// du site dans le serveur
// "Partie Business"

// Serveur Web
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//DataLayer : Lien vers le fichier de tranfert
var dataLayer = require("./dataLayer.js");
var morgan = require('morgan'); //Morgan : Logger, crée les fichiers logs

//init parser
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json()); //to support JSON encoded bodies
app.use(bodyParser.json({ type : 'application/vnd.api+json'}));


//Défini path relatif à partir d'un autre path relatif
app.use('/', require('./routes/Users'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/todolists', require('./routes/TodoList'));


//Démarre l'appication après que la connexion aves la base de données soit prête
dataLayer.init(function(){
  console.log('Initialisation du DataLayer');
  app.listen(process.env.PORT || 3000, function(){
    console.log("Rendez-vous au port ", this.address().port);
  });
});
