//Partie de Transfert de Données
// Aucune Manipulation, que des transfert
// A mettre à jour si la structure change

//Accès à la base MongoDB
const MongoClient = require('mongodb').MongoClient;
//Lien de récupération
const uri = "mongodb+srv://xajer28:.dEC8>eY[h+b@cluster0-f2lls.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

var db;

//Définition des méthodes d'envoi des données
var dataLayer = {
    init : function(cb){
        client.connect(function(err){
            if (err) throw err;

            
            db = client.db("Polybase");
            cb();
        });
    },

    getTaskSet : function(cb){
        db.collection("Polycollection").find({}).toArray(function(err,docs){
            cb(docs);
        });
    },

    insertTaskSet : function(task,cb){
        db.collection("Polycollection").insertOne(task, function(err,result){
            cb();
        })
    }

};

module.exports = dataLayer;