var MongoClient = require('mongodb').MongoClient;
var url= "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbo = db.db("EmployeeDB");
    var mydb = {name:"raj", address:"delhi"};
    dbo.collection("customer").insertOne(mydb,function(err,res){
        if(err)throw err;
        console.log("1 document inserted");
        db.close()
    })
})