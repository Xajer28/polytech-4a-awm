//Partie de Transfert de Données
// Aucune Manipulation, que des transfert
// A mettre à jour si la structure change

//Accès à la base MongoDB
const MongoClient = require('mongodb').MongoClient;
//Lien de récupération
const uri = "mongodb+srv://xajer28:xajer28@cluster0-f2lls.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });


//Définition des méthodes d'envoi des données
var dataLayer = {
    init : function(cb){
        client.connect(uri,function(err){
            if (err) throw err;
            const db = client.db;
            cb();
        });
        
    },

    getTaskSet : function(cb){
        const db = client.db;
        db.collection(Polydatabase.Polyliste).find({}).toArray(function(err,docs){
            cb(docs);
        });
    },

    insertTaskSet : function(task,cb){
        const db = client.db;
        db.collection(Polydatabase.Polyliste).insertOne(task, function(err,result){
            cb();
        })
    }
};

module.exports = dataLayer;