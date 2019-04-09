//Partie de Transfert de Données
// Aucune Manipulation, que des transfert
// A mettre à jour si la structure change

//Accès à la base MongoDB
var MongoClient = require('mongodb').MongoClient;
//Lien de récupération
var db = require("./db");
var client = new MongoClient(db.url, { useNewUrlParser: true });

var DB;

var ObjectId = require('mongodb').ObjectID;

//Définition des méthodes d'envoi des données
var dataLayer = {
    init : function(cb){
        client.connect(db.url,(err,database) =>{ 
            if (err) throw err;
            DB = database.db('Polydatabase');
            cb();
        });
    },


    createTask : function(task,cb){
        DB.collection("PolyListe").insertOne(task, function(err){
            if(err) throw err;
            DB.collection("PolyListe").find({}).toArray(function(err,docs){
                cb(docs);
            });
        });
    },

    getTaskSet : function(cb){
        DB.collection("PolyListe").find({}).toArray(function(err,docs){
            cb(docs);
        });
    },


    updateTaskDone : function(task, cb){
        var tache = {_id: ObjectId(task._id) };

        DB.collection("PolyListe").updateOne(tache, {$set: {done : true}}, function(err, result) {
            if (err) throw err;
            DB.collection("PolyListe").find({}).toArray(function(err,docs){
                cb(docs);
            });
        });
    },

    deleteTaskOne : function(task,cb){
        var tache = {_id: ObjectId(task._id) };
        DB.collection("PolyListe").deleteOne(tache,function(err){
            if (err) throw err;
            DB.collection("PolyListe").find({}).toArray(function(err,docs){
                cb(docs);
            });
            
        });
    }


    
};

    

module.exports = dataLayer;