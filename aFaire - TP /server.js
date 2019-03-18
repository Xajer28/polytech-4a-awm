// Ce script décrit les actions effectués pour traiter les données du site dans le serveur

// Utilisation des packages
var express = require('express');
var app = express();

var mongoose = require('mongoose'); //Mongoose
var morgan = require('morgan'); //Morgan
var bodyParser = require('body-parser');

app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json()); //to support JSON encoded bodies
app.use(bodyParser.json({ type : 'application/vnd.api+json'}));

app.get('/',function(req,res){
    res.sendFile('/public/index.html');
});

//Connection à la base MongoDB
mongoose.connect('mongodb://localhost/ListeaFaire', {
    useNewUrlParser : true});

var Liste = mongoose.model('Liste',{
    text : String
    
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