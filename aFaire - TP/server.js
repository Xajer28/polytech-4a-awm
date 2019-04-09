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

app.get('/api/laliste',function(req,res){
    dataLayer.getTaskSet(function(dtSet){
        res.send(dtSet);
    })
});

app.get('/',function(req,res){
    res.sendFile('/public/index.html');
});

// Ajout d'une tache dans la liste
app.post('/createTask',function(req,res){

    console.log("Parametre Reçu = "+req.body.text);

    var task = {
        name : req.body.text,
        done : false
    }

    
    dataLayer.createTask(task,function(laliste){
        console.log("Tache Ajoutée.");
        res.send(laliste);
    })
});

// Suppression d'une tache dans la liste
app.delete('/DeleteTaskOne/:id',function(req,res){
    //Debugage
    console.log("Je veux supprimer : "+ req.params.id);

    //Création du JSON de l'élément à supprimer
    var task = {
        _id : req.params.id
    }

    //Appel de la fonction pour supprimer
    dataLayer.deleteTaskOne(task, function(laliste){
        //Si supprimé, mise à jour de la liste
        console.log("Liste Mise à Jour.")
        res.send(laliste);
    });
});

    // Mise à jour d'une tache dans la liste
app.post('/Task_Done/:id',function(req,res){
    //Debugage
    console.log("Je veux mettre à jour : "+ req.params.id);

    //Création du JSON de l'élément à supprimer
    var task = {
        _id : req.params.id
    }

    //Appel de la fonction pour supprimer
    dataLayer.updateTaskDone(task, function(laliste){
        //Si supprimé, mise à jour de la liste
        console.log("Liste Mise à Jour.")
        res.send(laliste);
    });
});