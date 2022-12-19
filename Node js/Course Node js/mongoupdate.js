var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbo = db.db("EmployeeDB");
    var mydb = {address:"delhi"}; 
    var newdb = {$set:{name:"mike", address:"mumbai"}};
    dbo.collection("customer").updateOne(mydb, newdb, function(err,res){
        if(err)throw err;
        console.log("1 record updated");
        db.close();
    });
});