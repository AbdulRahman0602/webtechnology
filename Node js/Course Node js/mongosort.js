var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbo = db.db("EmployeeDB");
    var mydb = {name:1};
    dbo.collection("customer").find().sort(mydb).toArray(function(err,res){
        if(err)throw err;
        console.log(res);
        db.close();
    });
});