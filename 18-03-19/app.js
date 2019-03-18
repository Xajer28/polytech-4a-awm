const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://xajer28:F8G0aFc6a8SpASEa@polytech-t00ok.gcp.mongodb.net/Polytest?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


client.connect(function(err){
    if (err) throw err;
    var dataSet = client.db("Polytest").collection("Tasks").find();
    dataSet.forEach(function(task){
        console.log(task.name+'|'+task.done);
    });
});