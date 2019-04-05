//Partie de Transfert de Données
// Aucune Manipulation, que des transfert
// A mettre à jour si la structure change

//Accès à la base MongoDB
var MongoClient = require('mongodb').MongoClient;
//Lien de récupération
var db = require("./db");
var client = new MongoClient(db.url, { useNewUrlParser: true });

var DB;


//Définition des méthodes d'envoi des données
var dataLayer = {
    init : function(cb){
        client.connect(db.url,(err,database) =>{ 
            if (err) throw err;
            DB = database.db('Polybase')
            cb();
        });
        
    },

    // createList : function(cb){
    //     db.createCollection();
    // },

    getTaskSet : function(cb){
        DB.collection("Polyliste").find({}).toArray(function(err,docs){
            cb(docs);
        });
    }
    /*,

    insertTask : function(task,cb){
        const db = client.db;
        db.collection("Polyliste").insertOne(task, function(err,result){
            cb();
        })
    },

    updateTask : function(id, task, cb){
        ObjectID = require('mongodb').ObjectID; 
        var ident = {
                _id : new ObjectID(id)
        };
        console.log(ident);
        db.collection("Tasks").updateOne(ident, {$set: task}, function(err, result) {
            cb();
        });
    }*/

};

module.exports = dataLayer;