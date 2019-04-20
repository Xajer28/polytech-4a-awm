//Partie de Transfert de Données
// Aucune Manipulation, que des transfert
// A mettre à jour si la structure change

//Accès à la base MongoDB
var MongoClient = require('mongodb').MongoClient;
//Lien de récupération
var url = "mongodb+srv://xajer28:xajer28@cluster0-f2lls.mongodb.net/test?retryWrites=true"

var client = new MongoClient(url, { useNewUrlParser: true });

var DB;

var ObjectId = require('mongodb').ObjectID;

//Définition des méthodes d'envoi des données
var dataLayer = {
    init : function(cb){
        client.connect(url,(err,database) =>{
            if (err) throw err;
            DB = database.db('Polydatabase');
            cb();
        });
    },


    // Commandes Lists ##################################
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
    },


    //Commandes Users ####################################################
    createAccount : function(account,cb){
        DB.collection("Polyusers").insertOne(account, function(err){
            if(err) throw err;
            DB.collection("Polyusers").find({}).toArray(function(err,docs){
                cb(docs);
            });
        });
    },

    getAccountSet : function(cb){
        DB.collection("Polyusers").find({}).toArray(function(err,docs){
            cb(docs);
        });
    },

    findOneUser : function(user, cb){
            DB.collection("Polyusers").find({"Pseudo" : user.user,"Pwd" : user.pwd}).toArray(function(err,docs){
                cb(docs);
            });
    },

    configProfile : function(user, cb){
            DB.collection("Polyusers").find({"Pseudo" : user.user,"Pwd" : user.pwd}).toArray(function(err,docs){
                cb(docs);
            });
    },


    updateUser : function(task, cb){
        var tache = {_id: ObjectId(task._id) };

        DB.collection("Polyusers").updateOne(tache, {$set: {done : true}}, function(err, result) {
            if (err) throw err;
            DB.collection("Polyusers").find({}).toArray(function(err,docs){
                cb(docs);
            });
        });
    }
};



module.exports = dataLayer;
