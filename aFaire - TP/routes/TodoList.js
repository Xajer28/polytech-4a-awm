var app = require('express').Router();
var dataLayer = require('../dataLayer.js');


app.get('/api/laliste',function(req,res){
    dataLayer.getTaskSet(function(dtSet){
        res.send(dtSet);
    })
});

app.get('/',function(req,res){
    res.sendFile('./index.html');
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

module.exports=app;
